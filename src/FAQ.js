import { Box, Text } from "@chakra-ui/react";

export default function FAQ() {
    return (
        <div>
            <Box bgSize="cover" bgRepeat="no-repeat" bgImage="url('./images/instagram.png')" w="100vw" h="100vh" bgBlendMode="multiply" bgColor="white" display="flex" justifyContent="center" alignItems="center">
                <Box m="30px" borderWidth="1.2vw" borderColor={"white"} p="15px" borderRadius="lg" bg="#f9f9f9" h="90%" overflowY="auto">
                    <Box mb="5vh" textAlign="center">
                        <p style={{
                            color: "black",
                            fontSize: "5vw",
                            fontFamily: "Helvetica Neue",
                            WebkitTextStroke: ".2vw ",
                            fontStyle: "italic"
                        }}>FAQ</p>
                        <Box textAlign="left">
                            <Box><strong>Q: Why do I need to log in?</strong></Box>
                            Your login information is used to sign into instagram and activate the scraper.
                            <Box><strong>Q: Do you save my information?</strong></Box>
                            No. All infromation is only used once, when you download the files. No data is saved on the site.
                            <Box><strong>Q: Do you need the login of the username I'm scraping?</strong></Box>
                            In order to use the scraper, Instagram can be logged into <strong>any</strong> valid account. All this login does is save your inputted information into the files.
                            <Box><strong>Q: Can I access the following and followers of any account on Instagram?</strong></Box>
                            No. If it is a private account, you must provide the login for an account that is following that private account or has access to the followers and following.
                            <Box><strong>Q: Can I run the same files over again? </strong></Box>
                            Yes. As long as your login and password are still valid and you want to scrape the same username, the same local files will work.
                            <Box><strong>Q: What if I don't want to log in?</strong></Box>
                            <Box display="fixed">Download the files and manually change the values locally. Inside <strong>instagram-data.py</strong>: Enter your <Box fontFamily="Courier" display="inline"> 'phone number, username, or email' </Box> in <Box fontFamily="Courier" display="inline">'ENTER-LOGIN'</Box> and <Box fontFamily="Courier" display="inline">'password'</Box> in <Box fontFamily="Courier" display="inline">'ENTER-PASSWORD'</Box>. In <strong>scrape.js</strong>: Enter the <Box fontFamily="Courier" display="inline">'username'</Box> of the account you wish to scrape from into <Box fontFamily="Courier" display="inline">'ENTER-TARGET-USERNAME'</Box>.</Box>
                            <Box><strong>Q: Why is it run locally and not through a server?</strong></Box>
                            This website was developed and deployed before I got access to a site that allows me to deploy backends.
                        </Box></Box></Box></Box>
        </div>
    )
}