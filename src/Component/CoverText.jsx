import {Box, Typography} from "@mui/material";

function CoverText({text}) {
    return (
        <Box paddingY={4}>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                fontWeight="bolder"
                sx={{
                    backgroundImage: `linear-gradient(90deg, rgba(54,47,171,1) 30%, rgba(121,9,111,1) 54%, rgba(0,212,255,1) 88%)`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}

export default CoverText;