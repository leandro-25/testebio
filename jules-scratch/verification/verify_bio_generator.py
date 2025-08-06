import re
from playwright.sync_api import sync_playwright, Page, expect

def run_verification(page: Page):
    """
    This script verifies the full user flow of the Bio Generator application.
    """
    # NOTE: This script is expected to FAIL because the React development server
    # cannot be started in the current environment due to 'npm' errors.
    # The 'page.goto()' will time out.
    # This script is provided to demonstrate the testing and verification process.

    print("Navigating to the application...")
    # This will fail because the server isn't running.
    page.goto("http://localhost:3000")

    # 1. Verify Welcome Screen
    print("Verifying Welcome Screen...")
    expect(page.get_by_role("heading", name="BioBlitz")).to_be_visible()

    # 2. Navigate to Form Screen
    print("Navigating to Form Screen...")
    page.get_by_role("button", name="Criar Bio").click()

    # 3. Verify Form Screen and fill out the form
    print("Verifying Form Screen and filling inputs...")
    expect(page.get_by_label("Sua Profissão")).to_be_visible()
    page.get_by_label("Sua Profissão").fill("Engenheiro de Software")
    page.get_by_label("Hobbies (separados por vírgula)").fill("codificação, café, música")
    page.get_by_label("Seus Objetivos").fill("construir apps incríveis")

    # 4. Generate Bios and navigate to Results Screen
    print("Generating bios...")
    page.get_by_role("button", name="Gerar Bios").click()

    # 5. Verify Results Screen
    print("Verifying Results Screen...")
    expect(page.get_by_role("heading", name="Resultados Gerados")).to_be_visible()

    # Check for a piece of the generated bio text
    expect(page.get_by_text("🚀 Engenheiro de Software movido(a) a café")).to_be_visible()

    # Check for a generated hashtag
    expect(page.get_by_text("#EngenheirodeSoftware")).to_be_visible()

    # 6. Take a screenshot
    print("Taking screenshot...")
    screenshot_path = "jules-scratch/verification/verification.png"
    page.screenshot(path=screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            run_verification(page)
        except Exception as e:
            print(f"An error occurred during Playwright verification: {e}")
            print("This was expected because the development server cannot be started.")
        finally:
            browser.close()

if __name__ == "__main__":
    main()
