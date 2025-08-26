export default function FAQ() {
    return (
        <div>
            <strong>Why do you need to input your login?</strong>
            In order to scrape, instagram must be logged into any valid account. All this login does is sve your inputted information into the files
            If it is a private account, instagram must be logged into an account that has access to the followers/following data
            Do you save any information? No, all infromation is only on this one run. no data is saved so you must relogin each time you want to run a diff account
            Can i run the same files over again? yes, once you made them once they should continue working without any changes
            what if i dont want to log in? you can download the files and manually change the values for LOGIN and PASSWORD (your login) on instagram-data.py and SCRAPED-USERNAME (the account you wish to get the info for) on scrape.js
        </div>
    )
}