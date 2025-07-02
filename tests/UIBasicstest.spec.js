const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

test("@web First UI Test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
})

test("@web Using page fixture directly", async ({ page }) => {

    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google")
})

test("@web Login Page Test with Invalid Credentials", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshetty")
    await page.locator("#password").fill("learning")
    await page.locator("#signInBtn").click()
    const text = await page.locator("[style*='block']").textContent()
    expect(text).toEqual("Incorrect username/password.")
})

test("@web Login Page Test with valid Credentials and fetch all products", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator("#username")
    const signInBtn = page.locator("#signInBtn")
    const password = page.locator("#password")
    const cardTitles = page.locator(".card-body a")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy")
    await password.fill("learning")
    await signInBtn.click()
    // console.log(await cardTitles.first().textContent())
    //sync issue with allTextContents method
    const allTitles = await cardTitles.allTextContents()
    console.log(allTitles)
})

test("@web UI controls", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const username = page.locator('#username')
    const signInBtn = page.locator("#signInBtn")
    const dropDown = page.locator("select.form-control")
    const documentLink = page.locator("[href*='documents-request']")
    await dropDown.selectOption('consult')
    await page.locator(".radiotextsty").last().click()
    await page.locator("#okayBtn").click()
    await expect(page.locator(".radiotextsty").last()).toBeChecked()
    await page.locator("#terms").click()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText")
})


test("@web Child Window Handle", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const documentLink = page.locator("[href*='documents-request']")
    //Important Step
    const [newPage] =await Promise.all([context.waitForEvent('page'),documentLink.click()])
    await newPage.locator(".red").textContent()
})