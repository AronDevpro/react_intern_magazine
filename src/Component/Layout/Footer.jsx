import {Box, Grid, Stack, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {colors} from "../../utils/Color.js";

function Footer() {
    return (
        <>
            <Box sx={{width: '100%', borderTop:"1px solid", borderColor:colors.secondary}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} paddingY={2}>
                    <Grid item xs={12} sm={6} md={3} color={colors.secondary}>
                        <Typography
                            variant="h2"
                            component="h2"
                            align="center"
                            marginY={2}
                            paddingTop={1}>
                            Logo
                        </Typography>
                        <Stack direction="row" gap={2} justifyContent="center">
                            <TwitterIcon/>
                            <FacebookRoundedIcon/>
                            <InstagramIcon/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="subtitle1"
                            marginY={2}
                            paddingTop={1}
                            align="left"
                            fontWeight="bold"
                        >
                            Our services
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} color={colors.secondary}>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    IOS Development
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Mobile Development
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Enterprise Solution
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    BlockChain Development
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    IOT solutions
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Web Development
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Digital Marketing
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Multimedia Creations
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography
                            variant="subtitle1"
                            marginY={2}
                            paddingTop={1}
                            align="left"
                            fontWeight="bold"
                        >
                            Quick Links
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} color={colors.secondary}>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Home
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Services
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Careers
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    About us
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                    marginY={1}
                                >
                                    Contact us
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Stack marginY={3} gap={2}>
                            <Stack direction="row" gap={2}>
                                <CallIcon/>
                                <Stack color={colors.secondary}>
                                    <Typography
                                        variant="body1"
                                        align="left"
                                        fontWeight="bold"
                                        fontSize={12}
                                    >
                                        +44 76 156 119 68
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        align="left"
                                        fontWeight="bold"
                                        fontSize={12}
                                    >
                                        +44 76 156 119 68
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" gap={2} >
                                <EmailIcon/>
                            <Stack color={colors.secondary}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                >
                                    info@lyxux.com
                                </Typography>
                            </Stack>
                        </Stack>
                            <Stack direction="row" gap={2}>
                                <LocationOnIcon/>
                            <Stack color={colors.secondary}>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    fontWeight="bold"
                                    fontSize={12}
                                >
                                    London, United Kingdom
                                </Typography>
                            </Stack>
                        </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box bgcolor={indigo[900]} sx={{width: '100%'}} color={"white"}>
                <Typography variant="subtitle1" component="h2" align="center" marginTop="2" fontSize={12}
                            paddingTop={1}>
                    Copyright @ 2024 LYXUX LTD. All right received.
                </Typography>
            </Box>
        </>
    );
}

export default Footer;
