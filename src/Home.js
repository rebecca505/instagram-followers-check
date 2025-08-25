import { AbsoluteCenter, Box, Button, DownloadTrigger } from "@chakra-ui/react";
// import img from ../public/images/isntagram.png;

export default function Home() {
    return (
        <div>
            <Box bgSize="cover" bgRepeat="no-repeat" bgImage="url('./images/instagram.png')" w="100vw" h="100vh" bgBlendMode="multiply" bgColor="white">
                <Box mb="5vh" textAlign="center" >
                    <p style={{
                        color: "white",
                        fontSize: "5vw",
                        fontFamily: "Helvetica Neue",
                        WebkitTextStroke: ".2vw white",
                    }}>
                        instagram scraper
                        <p style={{
                            color: "white",
                            fontSize: "4vw",
                            WebkitTextStroke: ".1vw white"
                        }}>instructions</p>
                    </p>
                </Box>
                <Box color="white">
                    <center>
                        <Box w="50vw" textAlign="left">
                        <Box>1. Download the following files</Box>
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
                    </Box>
                    </center>
                </Box>
            </Box>
        </div>
    );
}