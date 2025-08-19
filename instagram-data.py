from playwright.sync_api import Playwright, sync_playwright
import os
from dotenv import load_dotenv

load_dotenv()
loginInfo = os.getenv('LOGIN')
passwordInfo = os.getenv('PASSWORD')

def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
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

    # todo

if __name__ == "__main__":
    with sync_playwright() as pw:
        run(pw)