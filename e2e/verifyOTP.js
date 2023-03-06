module.exports = {
    "go to your local file" : browser=>{
        browser.url(browser.launchUrl)
        .waitForElementPresent("input", 10000)

    },
    "got to gmail": browser=>{
        browser
        .url("https://www.google.com/intl/en-GB/gmail/about/")
        .click(".header__aside__buttons > .button--medium")
        .setValue("input.whsOnd","vismaypb86@gmail.com")
        .click("button.VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b")
        .waitForElementPresent("h2",100000)
    }
}