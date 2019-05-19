const todoListXPath = '//div[@data-test-id="todo-list"]';
const todoItemXPath = `${todoListXPath}/div[@data-test-id="todo-item"]`;

module.exports = {

  'Load the app': (browser) => {
    browser
      .url('http://localhost:3001')
      .useXpath()
      .waitForElementVisible('//input[@data-test-id="todo-input"]', 1000);
  },

  'Add three items': (browser) => {
    const theThirdTodoItemXPath = `${todoItemXPath}[3]`;
    browser
      .setValue('//input[@data-test-id="todo-input"]', 'test1')
      .keys('\uE007') // Enter
      .setValue('//input[@data-test-id="todo-input"]', 'test2')
      .keys('\uE007') // Enter
      .setValue('//input[@data-test-id="todo-input"]', 'test3')
      .keys('\uE007')
      .waitForElementVisible(theThirdTodoItemXPath, 500);
  },

  'Mark the first item as done': (browser) => {
    const theFirstCheckboxXPath = `${todoItemXPath}[1]/input[@data-test-id="checkbox"]`;
    browser
      .click(theFirstCheckboxXPath)
      .pause(500);
    browser.expect.element(theFirstCheckboxXPath).to.have.attribute('checked');
  },

  'Delete the second item': (browser) => {
    const theSecondDeleteButtonXPath = `${todoItemXPath}[2]/button[@data-test-id="delete-button"]`;
    browser
      .click(theSecondDeleteButtonXPath)
      .pause(500);
    browser.expect.element(`${todoItemXPath}[span="test2"]`).to.not.be.present;
  },

  'Reload the app': (browser) => {
    browser
      .refresh()
      .pause(500);
    browser.expect.element(`${todoItemXPath}[span="test1"]`).to.be.present;
    browser.expect.element(`${todoItemXPath}[span="test1"]/input[@data-test-id="checkbox"]`).to.have.attribute('checked');
    browser.expect.element(`${todoItemXPath}[span="test3"]`).to.be.present;
    browser.expect.element(`${todoItemXPath}[span="test3"]/input[@data-test-id="checkbox"]`).to.not.have.attribute('checked');
  }
};
