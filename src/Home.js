import { Box } from "@chakra-ui/react";

export default function Home() {
    return (
        <div>
            <Box m="5vh" p="5" textAlign="center">
                <p style={{
                    fontSize: "5vw",
                    fontFamily: "Helvetica Neue",
                    WebkitTextStroke: ".2vw black",
                }}>
                    instagram scraper
                </p>
            </Box>
        </div>
    );
}