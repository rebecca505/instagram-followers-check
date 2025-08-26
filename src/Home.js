import { Box, Button, Text, Grid, HoverCard, Portal, Strong, CardHeader, CardRoot, CardBody, CardFooter, Input, Popover } from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaUserCircle } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiUserCircleFill, PiUserCircleDuotone } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Home() {
    const [isClicked, setIsClicked] = useState(true)
    const [isClicked2, setIsClicked2] = useState(true)
    const [pyContent, setPyContent] = useState('')
    const [jsContent, setJsContent] = useState('')

    function switchH() {
        setIsClicked(s => !s)
    }
    function switchH2() {
        setIsClicked2(s => !s)
    }

    useEffect(() => {
        async function fetchPyFile() {
            try {
                const response = await fetch('/files/py-insta.txt');
                const data = await response.text();
                setPyContent(data);
            } catch (err) {
                console.error('Error loading file:', err);
            }
        }
        async function fetchJsFile() {
            try {
                const response = await fetch('/files/js-insta.txt');
                const data = await response.text();
                setJsContent(data);
            } catch (err) {
                console.error('Error loading file:', err);
            }
        }
        fetchPyFile();
        fetchJsFile();
    }, []);

    async function downloadPYFile() {
        var imports = `from playwright.sync_api import Playwright, sync_playwright
import json

# WRITE LOGIN BELOW (if you didn't insert it on the site)
loginInfo = "`
        var passwords = `"
# WRITE PASSWORD BELOW (if you didn't insert it on the site)
passwordInfo = "`
        var pyFile = pyContent
        var log = document.getElementById("login").value || "ENTER-LOGIN";
        var pass = document.getElementById("password").value || "ENTER-PASSWORD";
        var blob = new Blob([imports + log + passwords + pass + pyFile], { type: 'text/plain' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'instagram-data.py';
        link.click();
    }

    async function downloadJSFile() {
        var setup = `(async () => {
    async function scrapeData() {

        // WRITE TARGET USERNAME BELOW (if you didn't insert it on the site)
        const username = "`
        var jsFile = jsContent
        var user = document.getElementById("username").value || "ENTER-TARGET-USERNAME";
        var blob = new Blob([setup + user + jsFile], { type: 'text/plain' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'scrape.js';
        link.click();
    }

    return (
        <div>
            <Box bgSize="cover" bgRepeat="no-repeat" bgImage="url('./images/instagram.png')" w="100%" h="100%" bgBlendMode="multiply" bgColor="white" display="flex" justifyContent="center" alignItems="center">
                <Box m="30px" borderWidth="1.2vw" borderColor={"white"} p="15px" borderRadius="lg" bg="#f9f9f9" h="90%" overflowY="auto">
                    <Box mb="5vh" textAlign="center" >
                        <p style={{
                            color: "black",
                            fontSize: "4vw",
                            fontFamily: "Helvetica Neue",
                            WebkitTextStroke: ".2vw ",
                        }}>
                            <Popover.Root>
                                <Popover.Trigger asChild>
                                    <a style={{ position: 'absolute', left: '60px', cursor: 'pointer' }}>
                                        <PiUserCircleDuotone style={{ fontSize: "5vw" }} />
                                    </a>
                                </Popover.Trigger>
                                <Portal>
                                    <Popover.Positioner>
                                        <Popover.Content>
                                            <Popover.Arrow />
                                            <Popover.Body style={{ gap: "10px" }}>
                                                <Box w="90%">Enter your instagram login details and the username to retrieve data from</Box>
                                                <Popover.Root>
                                                    <Popover.Trigger>
                                                        <a style={{ position: 'absolute', right: '15px', top: '15px', cursor: 'pointer' }}>
                                                            <IoMdInformationCircleOutline style={{ fontSize: "30px" }} />
                                                        </a>
                                                    </Popover.Trigger>
                                                    <Popover.Content>
                                                        <Popover.Arrow />
                                                        <Popover.Body>
                                                            <Box><strong>Your data is not saved</strong></Box>
                                                            The information is only used to temporarily update the values in the files you will download.
                                                        </Popover.Body>
                                                    </Popover.Content>
                                                </Popover.Root>
                                                <Input id="login" mt="10px" placeholder="Login" size="sm" />
                                                <Input id="password" my="10px" placeholder="Password" size="sm" />
                                                <Input id="username" placeholder="Target Username" size="sm" />
                                            </Popover.Body>
                                        </Popover.Content>
                                    </Popover.Positioner>
                                </Portal>
                            </Popover.Root>
                            instagram scraper
                            <p style={{
                                color: "black",
                                fontSize: "3vw",
                                WebkitTextStroke: ".1vw white"
                            }}>instructions</p>
                        </p>
                    </Box>
                    <Box color="black" mx="1vw">
                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6" minWidth="350px">
                            <CardRoot borderRadius="0">
                                <CardHeader><Box display="flex" alignItems="center" mb="20px">
                                    <FaUserCircle style={{ marginRight: '8px', fontSize: "20px" }} />
                                    <Text fontSize="lg" fontWeight="bold">scraper_steps</Text>
                                    <Box ml="auto"><BsThreeDotsVertical /></Box>
                                </Box>
                                </CardHeader>
                                <CardBody borderWidth=".5px" p="15px" borderColor="gray.110" bgColor="gray.100">
                                    <Box textAlign="left">
                                        <Box display="flex" alignItems="center" gap="2">1. Click on the <PiUserCircleDuotone style={{ fontSize: "20px" }} /> icon and enter your details</Box>
                                        <Box>2. Download the following files</Box>
                                        <Box display="flex" m="10px" gap="10px" flexWrap="wrap">
                                            <Button
                                                borderColor="gray.300"
                                                fontSize={"14px"}
                                                background="black"
                                                color="white"
                                                _hover={{ bg: "gray.200", color: "black", borderWidth: "2px" }}
                                                borderWidth=".5px">
                                                <a onClick={downloadPYFile}> PYTHON FILE</a>
                                            </Button>

                                            <Button
                                                borderColor="gray.300"
                                                fontSize={"14px"}
                                                background="black"
                                                color="white"
                                                _hover={{ bg: "gray.200", color: "black", borderWidth: "2px" }}
                                                borderWidth=".5px">
                                                <a onClick={downloadJSFile}> JAVASCRIPT FILE</a>
                                            </Button>
                                        </Box>
                                        <Box>3. Ensure these files are in the same folder or location</Box>
                                        <Box>4.
                                            <HoverCard.Root>
                                                <HoverCard.Trigger asChild>
                                                    <span> Open
                                                        <a href="https://support.apple.com/guide/terminal/welcome/mac"> Terminal</a>
                                                    </span>
                                                </HoverCard.Trigger>
                                                <Portal>
                                                    <HoverCard.Positioner>
                                                        <HoverCard.Content>
                                                            <HoverCard.Arrow />
                                                            <Box>Open Spotlight search <strong>(Command-Spacebar)</strong></Box>
                                                            <Box>Type "terminal" and hit 'return'</Box>
                                                        </HoverCard.Content>
                                                    </HoverCard.Positioner>
                                                </Portal>
                                            </HoverCard.Root>
                                        </Box>
                                        <Box>5.<HoverCard.Root>
                                            <HoverCard.Trigger asChild>
                                                <span> Verify <a href="https://www.python.org/"><strong>python</strong></a> is installed
                                                </span>
                                            </HoverCard.Trigger>
                                            <Portal>
                                                <HoverCard.Positioner>
                                                    <HoverCard.Content>
                                                        <HoverCard.Arrow />
                                                        <Box>Type in:</Box>
                                                        <Box><Strong>python --version</Strong></Box>
                                                        <Box>into Terminal</Box>
                                                    </HoverCard.Content>
                                                </HoverCard.Positioner>
                                            </Portal>
                                        </HoverCard.Root></Box>
                                        <Box>6.<HoverCard.Root>
                                            <HoverCard.Trigger asChild>
                                                <span> If not, <a href="https://www.python.org/downloads/"> install python</a>
                                                </span>
                                            </HoverCard.Trigger>
                                            <Portal>
                                                <HoverCard.Positioner>
                                                    <HoverCard.Content>
                                                        <HoverCard.Arrow />
                                                        <Box>Type in:</Box>
                                                        <Box><Strong>brew install python</Strong></Box>
                                                        <Box>into Terminal</Box>
                                                        <br />
                                                        <Box><strong>NOTE:</strong> You need to install brew to use this command. Type in:</Box>
                                                        <Box><strong>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</strong></Box>
                                                        <Box>into Terminal</Box>
                                                    </HoverCard.Content>
                                                </HoverCard.Positioner>
                                            </Portal>
                                        </HoverCard.Root></Box>
                                        <Box>7. Install dependencies:</Box>
                                        <Box pl="15px">pip install playwright python-dotenv</Box>
                                        <Box>8. Install Playwright:</Box>
                                        <Box pl="15px">playwright install</Box>
                                        <Box>Finally run the code and type: <strong>python instagram-data.py</strong></Box>
                                    </Box>
                                </CardBody>
                                <CardFooter> <Grid>
                                    <Box display="flex" gap="10px" my="10px" fontSize="20px" alignItems="center"> <a onClick={switchH}>{isClicked ? (<FaRegHeart />) : (<FaHeart />)}</a>  <a href="mailto:rlf2153@barnard.edu"><TbMessageCircle style={{ transform: "scaleX(-1)", fontSize: "23px" }} /> </a> </Box>
                                    <Box><strong>scraper_steps</strong> All done! You can now preview the saved files in your folder</Box>
                                </Grid>
                                </CardFooter>
                            </CardRoot>
                            <CardRoot borderRadius="0">
                                <CardHeader><Box display="flex" alignItems="center" mb="20px">
                                    <PiUserCircleFill style={{ marginRight: '8px', fontSize: "25px" }} />
                                    <Text fontSize="lg" fontWeight="bold">what_is_it</Text>
                                    <Box ml="auto"><BsThreeDotsVertical /></Box>
                                </Box>
                                </CardHeader>
                                <CardBody borderWidth=".5px" p="15px" borderColor="gray.110" bgColor="gray.100">
                                    <Box textAlign="left">
                                        <Box>This tool returns four pieces of information:</Box>
                                        <Box>1. Your followers <br />
                                            2. People you follow <br />
                                            3. Who you don’t follow back <br />
                                            4. Who doesn’t follow you back</Box>
                                        <Box mt="10px">You must be logged in (and follow if it's private) to get data from an account.</Box>
                                        <Box my="10px">By using this tool, you can easily monitor and manage any Instagram connections.</Box>
                                        <strong>NOTE:</strong> Unfortunately, because Instagram’s anti-bot mechanisms are quite vigilant, the tool must be deployed locally on your computer.
                                        <Box mt="10px">The instructions are for macOS; however, the code works on any system.</Box>
                                    </Box>
                                </CardBody>
                                <CardFooter> <Grid>
                                    <Box display="flex" gap="10px" my="10px" fontSize="20px" alignItems="center"> <a onClick={switchH2}>{isClicked2 ? (<FaRegHeart />) : (<FaHeart />)}</a>  <a href="mailto:rlf2153@barnard.edu"><TbMessageCircle style={{ transform: "scaleX(-1)", fontSize: "23px" }} /> </a> </Box>
                                    <Box><strong>what_is_it</strong> Hope you found this useful!</Box>
                                </Grid>
                                </CardFooter>
                            </CardRoot>
                        </Grid>
                    </Box>
                </Box></Box>
        </div>
    );
}