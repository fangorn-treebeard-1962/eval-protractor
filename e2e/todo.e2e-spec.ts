import { by, element, browser } from 'protractor';
import 'jasmine';

xdescribe('angularjs homepage todo list', function() {
    it('should add a todo and complete it', function() {
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write 1st protractor test');
        element(by.css('[value="add"]')).click();

        let todoList = element.all(by.repeater('todo in todoList.todos'));
        expect<any>(todoList.count()).toEqual(3);
        expect<any>(todoList.get(3).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(1).element(by.css('input')).click();
        let completedAmount = element.all(by.css('.done-true'));
        expect<any>(completedAmount.count()).toEqual(2);
    });
});