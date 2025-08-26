import { AbsoluteCenter, Box, Button, Card, Text, Grid, HoverCard, Portal, Strong } from "@chakra-ui/react";
// import { IoMdInformationCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";



export default function Home() {
    return (
        <div>
            <Box bgSize="cover" bgRepeat="no-repeat" bgImage="url('./images/instagram.png')" w="100vw" h="100vh" bgBlendMode="multiply" bgColor="white" display="flex" justifyContent="center" alignItems="center">
                <Box m="30px" borderWidth="1.2vw" borderColor={"white"} p="15px" borderRadius="lg" bg="#f9f9f9" >
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
                        <Grid templateColumns="repeat(2, 1fr)" gap="6">
                            <Card.Root borderRadius={0}>
                                <Card.Header><Box display="flex">
                                    <CgProfile style={{ marginRight: '8px' }} />
                                    <Text fontSize="lg" fontWeight="bold">Steps</Text>
                                </Box>
                                </Card.Header>
                                <Card.Body borderWidth="2px" p="10px" borderColor="gray.300">
                                    <Box textAlign="left">
                                        <Box>1. Download the following files</Box>
                                        <Box display="flex" m="10px" gap="10px" flexWrap="wrap">
                                            <Button
                                                borderColor="gray.300"
                                                w={"200px"}
                                                fontSize={17}
                                                background="black"
                                                color="white"
                                                _hover={{ bg: "gray.200", color: "black", borderWidth: "2px" }}
                                                borderWidth=".5px">
                                                <a href={require('./files/instagram-data.txt')} download="instagram-data.py">PYTHON FILE</a>
                                            </Button>

                                            <Button
                                                borderColor="gray.300"
                                                w={"200px"}
                                                fontSize={17}
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
                                </Card.Body>
                                <Card.Footer><Box><FaRegHeart /></Box>
                                <Box><strong>all-done</strong> You can now preview the saved files in your folder</Box></Card.Footer>
                            </Card.Root>
                            <Box>What is this?</Box>
                        </Grid>
                    </Box>
                </Box></Box>
        </div>
    );
}