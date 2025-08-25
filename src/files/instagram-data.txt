from playwright.sync_api import Playwright, sync_playwright
import os
from dotenv import load_dotenv
import json

load_dotenv()
loginInfo = os.getenv('LOGIN')
passwordInfo = os.getenv('PASSWORD')

def run(playwright: Playwright) -> None:
    print("Please wait for it to begin")
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()

    # Open new page
    page = context.new_page()

    page.goto("https://www.instagram.com/")

    # Fill with username
    page.get_by_label("Phone number, username, or email").click()
    page.get_by_label("Phone number, username, or email").fill(loginInfo)

    # Fill with password
    page.get_by_label("Password").click()
    page.get_by_label("Password").fill(passwordInfo)

    # Click Log In
    page.get_by_role("button", name="Log in", exact=True).click()
    
    page.wait_for_url("https://www.instagram.com/accounts/onetap/?next=%2F")

    page.goto("https://www.instagram.com/")

    # Wait for the necessary JS to be ready
    page.wait_for_timeout(5000)

    page.on("console", lambda msg: print(f"{msg.text}"))

    # Read the JS code from the file
    with open("scrape.js", "r", encoding="utf-8") as f:
        js_code = f.read()

    # Pass to evaluate
    data = page.evaluate(js_code)
    
    if "error" in data:
        print("Error occurred:", data["error"])
    else:
        # Save to JSON files
        with open("followers.json", "w", encoding="utf-8") as f:
            json.dump(data["followers"], f, indent=2)
        with open("following.json", "w", encoding="utf-8") as f:
            json.dump(data["following"], f, indent=2)
        with open("dontFollowMeBack.json", "w", encoding="utf-8") as f:
            json.dump(data["dontFollowMeBack"], f, indent=2)
        with open("iDontFollowBack.json", "w", encoding="utf-8") as f:
            json.dump(data["iDontFollowBack"], f, indent=2)
    
    print("Data saved to JSON files!")

    context.close()
    browser.close()

if __name__ == "__main__":
    with sync_playwright() as pw:
        run(pw)