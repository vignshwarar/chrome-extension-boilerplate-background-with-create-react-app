/*global chrome*/
/*
 * Why shadow dom ?
 *   Prevent main page styles conflicting with inserted modal
 *
 * Why Styled-Components?
 *   With styled-components we can reduce the headache of thinking about how to load css into the page and I love styled-components <3
 * */
import React, { useEffect, useState } from "react";
import {
    CovidTrackerWrapper,
    DataPointWrapper,
    DataPoint,
    HeaderLeft,
    HeaderRight,
    HeadingText,
    ParagraphText,
    TrackerContent,
    TrackerHeader,
    LoaderWrapper,
    MotionEntryWrapper,
} from "./styles";
import { COVID_DATA_LOADED } from "../../Constants/types";

const Tracker = () => {
    const [covidData, setCovidData] = useState(null);
    const convertNumber = (data) => {
        return data.toLocaleString("en-US");
    };
    useEffect(() => {
        /* Listen messages based on type */
        if(chrome.extension){
            chrome.extension.onMessage.addListener(function (
                msg,
                sender,
                sendResponse
            ) {
                sendResponse("Received.....");
                switch (msg.action) {
                    case COVID_DATA_LOADED:
                        return setCovidData(msg.payload);
                    default:
                        return;
                }
            });
        }else {
            /* Simulate fake data for development */
            console.log('In dev mode simulating...fake request');
            setCovidData({
                "country": "USA (DEV)",
                "cases": 6212174,
                "todayCases": 378,
                "deaths": 187742,
                "todayDeaths": 6,
                "recovered": 3456859,
                "active": 2567573,
                "critical": 15864,
                "casesPerOneMillion": 18749,
                "deathsPerOneMillion": 567,
                "totalTests": 82626645,
                "testsPerOneMillion": 249378
            })
        }

    }, []);



    const animationProps = (delay) => {
        return {
            initial: { y: 5, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
                duration: 0.15,
                delay,
            },
        };
    };
    return (
        <CovidTrackerWrapper>
            <MotionEntryWrapper
                initial={{ y: -5, opacity: 0.8 }}
                animate={{ y: 0, opacity: 1 }}
            >
                {covidData ? (
                    <>
                        <TrackerHeader>
                            <HeaderLeft {...animationProps(0)}>
                                <div className="leftLine" />
                                <div className="rowAlign">
                                    <HeadingText>{covidData.country}</HeadingText>
                                    <ParagraphText>Covid Tracker</ParagraphText>
                                </div>
                            </HeaderLeft>

                            <HeaderRight {...animationProps(0.05)}>
                                <ParagraphText>Today Cases</ParagraphText>
                                <HeadingText>{convertNumber(covidData.todayCases)}</HeadingText>
                            </HeaderRight>
                        </TrackerHeader>

                        <TrackerContent>
                            <DataPointWrapper {...animationProps(0.1)}>
                                <ParagraphText>cases</ParagraphText>
                                <DataPoint>{convertNumber(covidData.cases)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.15)}>
                                <ParagraphText>deaths</ParagraphText>
                                <DataPoint>{convertNumber(covidData.deaths)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.2)}>
                                <ParagraphText>Today Deaths</ParagraphText>
                                <DataPoint>{convertNumber(covidData.todayDeaths)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.25)}>
                                <ParagraphText>Recovered</ParagraphText>
                                <DataPoint>{convertNumber(covidData.recovered)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.3)}>
                                <ParagraphText>Active</ParagraphText>
                                <DataPoint>{convertNumber(covidData.active)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.35)}>
                                <ParagraphText>Critical</ParagraphText>
                                <DataPoint>{convertNumber(covidData.critical)}</DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.4)}>
                                <ParagraphText>Cases/M</ParagraphText>
                                <DataPoint>
                                    {convertNumber(covidData.casesPerOneMillion)}
                                </DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.45)}>
                                <ParagraphText>Deaths/M</ParagraphText>
                                <DataPoint>
                                    {convertNumber(covidData.deathsPerOneMillion)}
                                </DataPoint>
                            </DataPointWrapper>

                            <DataPointWrapper {...animationProps(0.5)}>
                                <ParagraphText>Tests/M</ParagraphText>
                                <DataPoint>
                                    {convertNumber(covidData.testsPerOneMillion)}
                                </DataPoint>
                            </DataPointWrapper>
                        </TrackerContent>
                    </>
                ) : (
                    <LoaderWrapper>
                        <div className="loader-4 center">
                            <span />
                        </div>
                    </LoaderWrapper>
                )}
            </MotionEntryWrapper>
        </CovidTrackerWrapper>
    );
};

export default Tracker;
