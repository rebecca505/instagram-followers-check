import { AbsoluteCenter, Box, Button, DownloadTrigger } from "@chakra-ui/react";

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
            <AbsoluteCenter axis="horizontal" gap="50px">
                <Button
                    borderColor="#dd2a7b"
                    w={"200px"}
                    fontSize={17}
                    background="#f58529"
                    color="#515bd4"
                    _hover={{ bg: "#feda77", borderWidth: "2px" }}
                    borderWidth=".5px">
                    <a href={require('./files/instagram-data.txt')} download="instagram-data.py">PYTHON FILE</a>
                </Button>
                
                <Button
                    borderColor="#dd2a7b"
                    w={"200px"}
                    fontSize={17}
                    background="#f58529"
                    color="#515bd4"
                    _hover={{ bg: "#feda77", borderWidth: "2px" }}
                    borderWidth=".5px">
                    <a href={require('./files/scrape.txt')} download="scrape.js">JAVASCRIPT FILE</a>
                </Button></AbsoluteCenter>
        </div>
    );
}