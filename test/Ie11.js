/**
 * Test case for IE 11 issue with sauce lab
 */

describe('@ie11@', function () {
  it('scroll the page', async function () {
    let nemo = this.nemo;
    let {upfrontHeader, articleTitle } = nemo.view.topic;
    await nemo.driver.get("https://www.paypal.com/smarthelp/contact-us");
    await nemo.driver.sleep(5000);
    const elements = await nemo.view._finds('className:item-container');
    await elements[0].click();
    await nemo.driver.sleep(5000);
    console.log('Selecting second topic from list'); // eslint-disable-line no-console
    const elementsItemContainer = await nemo.view._finds('className:item-container');
    await elementsItemContainer[0].click(); // TODO Change it to topic instead of index
    await nemo.driver.sleep(5000);
    const upfrontElement = await upfrontHeader();
    const upfrontheaderText = await upfrontElement.getText();
    console.log(`Checking Upfront Header Text -- ${upfrontheaderText}`); // eslint-disable-line no-console
    await nemo.driver.sleep(5000);
    const articleElement = await articleTitle();
    const articleTitleText = await articleElement.getText();
    console.log(`Checking Article Title Text -- ${articleTitleText}`); // eslint-disable-line no-console
    await nemo.driver.sleep(5000);
    const contactOptions = await nemo.view._find({locator: 'contact-options', type: 'className'});
    await nemo.driver.executeScript((el) => { // scroll down
      el.scrollIntoView(true);
    }, contactOptions);
  });
});
