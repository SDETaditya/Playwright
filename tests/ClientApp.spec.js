const { test, expect } = require('@playwright/test');


test("@web Dynamic wait", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("aditya@email.com")
    await page.locator("#userPassword").fill("Aditya@123")
    await page.locator("[value='Login']").click()
    // allTextContent method does not wait for element to be attached so the line below would return 0
    // const titles = await page.locator(".card-body b").allTextContents()
    // await page.waitForLoadState('networkidle')
    await page.locator(".card-body b").first().waitFor()
    const titles = await page.locator(".card-body b").allTextContents()
    console.log(titles)
})