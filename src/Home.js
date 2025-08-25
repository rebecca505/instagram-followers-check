import { AbsoluteCenter, Box, Button } from "@chakra-ui/react";
import { Octokit } from "@octokit/core";

export default function Home() {

    const octokit = new Octokit({ auth: "token" });

    async function runWorkflow() {
        try {
            await octokit.request(
                "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
                {
                    owner: "rebecca505",
                    repo: "instagram-followers-check",
                    workflow_id: "run.yml",  // workflow file name or workflow id number
                    ref: "main",
                    headers: {
                        "X-GitHub-Api-Version": "2022-11-28",
                    },
                }
            );
            console.log("Workflow triggered!");
        } catch (error) {
            console.error("Failed to trigger workflow:", error);
        }
    }

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
            <AbsoluteCenter axis="horizontal">
                <Button
                    borderColor="black"
                    w={"200px"}
                    fontSize={17}
                    background="#dd2a7b"
                    color="#515bd4"
                    _hover={{ bg: "#feda77", borderWidth: "2px" }}
                    borderWidth=".5px">
                    <a onClick={runWorkflow}>RUN SCRAPER</a>
                </Button></AbsoluteCenter>
        </div>
    );
}