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
            <Box>
                <center>
                    <Box>instructions for scraping instagram:</Box>
                    <Box>1. download the following files</Box>
                    <Box>
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
                        </Button>
                    </Box>
                    <Box>2. open Terminal</Box>
                    <Box>3. verify python is installed. type in: <text fontFamily="Courier-New">python --version</text></Box>
                    <Box>4. If not, install it: brew --version</Box>
                    <Box>4.5 NOTE* you may need to install brew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</Box>
                    <Box>Then run step 4</Box>
                    <Box>5. install dependencies: pip install playwright python-dotenv</Box>
                    <Box>6. then: playwright install</Box>
                    {/* need a place for users to type in username/password safely */}
                    <Box>Finally: python instagram-data.py</Box>
                </center>
            </Box>
        </div>
    );
}