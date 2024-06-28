import CoverText from "../../Component/CoverText.jsx";
import {Box, Divider, Grid, Typography, Stack} from "@mui/material";
import {homeData} from '../../utils/HomeData.js'
import CardForBlogs from "../../Component/CardForBlogs.jsx";
import CardForHomeTop from "../../Component/CardForHomeTop.jsx";
import {data} from '../../utils/Data.js'
import CardWithImageAndText from "../../Component/CardWithImageAndText.jsx";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import {blogsData} from "../../utils//BlogsData.js";
import CardForTrending from "../../Component/CardForTrending.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime.js";
import React from "react";
import {colors} from "../../utils/Color.js";

function HomePage() {
    return (
        <>
            <CoverText text="LYXUX MAGAZINE"/>
            <Box px={{xs:0, sm:1, md:6}}>
                <Typography variant="h2" component="h2" fontSize={30}>
                    Latest News
                </Typography>
                <Grid container spacing={2} alignContent="center">
                    {homeData.map((data, index) => (
                        <Grid item xs={12} sm={6} md={3}  key={index}>
                            <CardForHomeTop title={data.title}/>
                        </Grid>
                    ))}
                </Grid>
                <Divider style={{marginBottom:10, backgroundColor:colors.primary}}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} marginY={3}>
                        <Typography variant="h2" component="h2" fontSize={30} marginBottom={2}>
                            Big News Of The Day
                        </Typography>
                        <Box
                            component="img"
                            alt="The house from the offer."
                            src="src/assets/img-1.jpg"
                            width="100%"
                            marginBottom={2}
                        />
                        <Typography gutterBottom variant="h4" component="h4" fontSize={25} fontWeight="bold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quia!
                        </Typography>
                        <Stack direction="row" gap={4}>
                        <Stack>
                            <Typography variant="body2" fontWeight="bold">
                                By: Zack
                            </Typography>
                        </Stack>
                        <Stack>
                            <Stack direction="row" gap={1}>
                                <AccessTimeIcon fontSize="small"/>
                                <Typography variant="body2" color="text.secondary">
                                    3 min ago
                                </Typography>
                            </Stack>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} marginY={3}>
                        <Stack direction="row" gap={2}>
                        <TrendingUpOutlinedIcon/>
                        <Typography variant="h2" component="h2" fontSize={30}>
                            Trending Blogs
                        </Typography>
                        </Stack>
                        {blogsData.slice(4).map((data,index)=>(
                        <CardForTrending title={data.title} key={index}/>
                        ))}
                    </Grid>
                </Grid>
                <Divider style={{marginBottom:10, backgroundColor:colors.primary}}/>
                <Grid container spacing={2} alignContent="center">
                    {data.slice(3).map((datas, index) => (
                        <Grid item xs={12} sm={6} md={4}  key={index}>
                            <CardWithImageAndText image={datas.image} description={datas.description} title={datas.title}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;