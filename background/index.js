import 'regenerator-runtime/runtime';
import {getCovidStats} from "./Api";
import {COVID_DATA_LOADED} from './Constants/types';

const state = {
    injected_tab_ids:{},
};


const sendMessageToScript = (payload, cb) => {
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, payload, function(response) {
            cb(response)
        });
    });
}
const sampleRequestWithCovidApi = async () => {
   let {data:payload} = await getCovidStats('USA'); // change the country you want
    sendMessageToScript({ action:COVID_DATA_LOADED, payload }, () => {
        /* If you have any requirement after payload sent to inserted bundle that goes here... */
    });
}

/* Chrome On/Off controls */
const handleExtensionOpenClose = ({ id: tab_id }) => {
    if(state.injected_tab_ids[tab_id]){
        chrome.tabs.executeScript(tab_id, {
            file: 'utils/ejectScript.js'
        }, () => {
            delete state.injected_tab_ids[tab_id];
        });
    }else {
        chrome.tabs.executeScript(tab_id, {
            file: 'bundle.min.js' // injection
        }, () => {
            /* Handle the Api Request */
            sampleRequestWithCovidApi();
            state.injected_tab_ids[tab_id] = true;
        })
    }
}
chrome.browserAction.onClicked.addListener((tab) => {
    if(tab.status === 'complete'){
        handleExtensionOpenClose(tab);
    }
});