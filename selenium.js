const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options().setChromeBinaryPath('/usr/bin/brave-browser');



async function playRadio() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();
  
  try {
    await driver.get('index.html');

    // Find and click the "Rock Nation Radio" link
    let link = await driver.findElement(By.xpath("//a[contains(text(), 'Rock Nation Radio')]"));
    await link.click();

    // Wait for the audio to start playing
    await driver.wait(until.elementLocated(By.id('audio')), 10000);
    await driver.wait(async function() {
      let currentTime = await driver.executeScript("return document.getElementById('audio').currentTime");
      return currentTime > 0;
    }, 10000);

    // Verify that the audio is playing
    let isPlaying = await driver.executeScript("return !document.getElementById('audio').paused");
    if (!isPlaying) {
      throw new Error('Audio is not playing');
    }

    // Wait for the audio to stop playing
    await driver.sleep(10000);
    await driver.wait(async function() {
      let currentTime = await driver.executeScript("return document.getElementById('audio').currentTime");
      return currentTime == 0;
    }, 10000);

    // Verify that the audio has stopped playing
    let isPaused = await driver.executeScript("return document.getElementById('audio').paused");
    if (!isPaused) {
      throw new Error('Audio is still playing');
    }
  } finally {
    await driver.quit();
  }
}

playRadio();
