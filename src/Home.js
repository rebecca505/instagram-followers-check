import { Box, Button, Text, Grid, HoverCard, Portal, Strong, CardHeader, CardRoot, CardBody, CardFooter } from "@chakra-ui/react";
// import { IoMdInformationCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";




export default function Home() {
    const [isClicked, setIsClicked] = useState(false)
    function switchH() {
        setIsClicked(s => !s)
    }
    return (
        <div>
            <Box bgSize="cover" bgRepeat="no-repeat" bgImage="url('./images/instagram.png')" w="100%" h="100%" bgBlendMode="multiply" bgColor="white" display="flex" justifyContent="center" alignItems="center">
                <Box m="30px" borderWidth="1.2vw" borderColor={"white"} p="15px" borderRadius="lg" bg="#f9f9f9" h="90%" overflowY="auto">
                    {/* <AbsoluteCenter fontSize="15vw" color="white"><BiRadioCircle /></AbsoluteCenter> */}
                    <Box mb="5vh" textAlign="center" >
                        <p style={{
                            color: "black",
                            fontSize: "4vw",
                            fontFamily: "Helvetica Neue",
                            WebkitTextStroke: ".2vw ",
                        }}>
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
                                    <CgProfile style={{ marginRight: '8px', fontSize:"20px" }} />
                                    <Text fontSize="lg" fontWeight="bold">scraper_steps</Text>
                                    <Box ml="auto"><BsThreeDotsVertical /></Box>
                                </Box>
                                </CardHeader>
                                <CardBody borderWidth=".5px" p="15px" borderColor="gray.110" bgColor="gray.100">
                                    <Box textAlign="left">
                                        <Box>1. Download the following files</Box>
                                        <Box display="flex" m="10px" gap="10px" flexWrap="wrap">
                                            <Button
                                                borderColor="gray.300"
                                                fontSize={"14px"}
                                                background="black"
                                                color="white"
                                                _hover={{ bg: "gray.200", color: "black", borderWidth: "2px" }}
                                                borderWidth=".5px">
                                                <a href={require('./files/instagram-data.txt')} download="instagram-data.py">PYTHON FILE</a>
                                            </Button>

                                            <Button
                                                borderColor="gray.300"
                                                fontSize={"14px"}
                                                background="black"
                                                color="white"
                                                _hover={{ bg: "gray.200", color: "black", borderWidth: "2px" }}
                                                borderWidth=".5px">
                                                <a href={require('./files/scrape.txt')} download="scrape.js">JAVASCRIPT FILE</a>
                                            </Button>
                                        </Box>
                                        <Box>2. Ensure these files are in the same folder or location</Box>
                                        <Box>3.
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
                                        <Box>4.<HoverCard.Root>
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
                                        <Box>5.<HoverCard.Root>
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
                                        <Box>5. Install dependencies:</Box>
                                        <Box pl="15px">pip install playwright python-dotenv</Box>
                                        <Box>6. Install Playwright:</Box>
                                        <Box pl="15px">playwright install</Box>
                                        {/* need a place for users to type in username/password safely */}
                                        <Box>Finally run the code and type: <strong>python instagram-data.py</strong></Box>
                                    </Box>
                                </CardBody>
                                <CardFooter> <Grid>
                                    <Box display="flex" gap="10px" my="10px" fontSize="20px" alignItems="center"> <a onClick={switchH}>{isClicked ? (<FaRegHeart />) : (<FaHeart />)}</a>  <TbMessageCircle style = {{transform: "scaleX(-1)", fontSize:"23px" }} /> </Box> 
                                <Box><strong>scraper_steps</strong> All done! You can now preview the saved files in your folder</Box>
                                </Grid>
                                </CardFooter>
                            </CardRoot>
                            <Box>What is this?</Box>
                        </Grid>
                    </Box>
                </Box></Box>
        </div>
    );
}