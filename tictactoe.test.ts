import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();   
});

test('Can mark top right tile', async () => {
    let topRight = await driver.findElement(By.id('cell-0'))
    await topRight.click()

    let topRightVal = await driver.findElement(By.id('cell-0')).getAttribute('innerHTML') 
    expect(topRightVal).toEqual('X')
})

test('Opponent can make move', async () => {
    let topMidVal = await driver.findElement(By.id('cell-1')).getAttribute('innerHTML') 
    expect(topMidVal).toEqual('O')
})

test('Cells do not change after game', async () => {
    // Necessary cells are selected.
    let topCenter = await driver.findElement(By.id('cell-1'))
    let midCenter = await driver.findElement(By.id('cell-4'))
    let bottomCenter = await driver.findElement(By.id('cell-7'))
    let bottomLeft = await driver.findElement(By.id('cell-8'))

    // Cells are clicked.
    await topCenter.click()
    await midCenter.click()
    await bottomCenter.click()
    await bottomLeft.click()

    // Value of bottom left is selected and checked after game state ends.
    let botLeftVal = await driver.findElement(By.id('cell-8')).getAttribute('innerHTML') 
    expect(botLeftVal).toEqual('')
})