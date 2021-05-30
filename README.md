# Checkboxddlib

A lightweight angular library which provides a custom input that contains both a checkbox and a text input. The checkboxInput can be used as a standalone component or in conjuction with the provided dropdown component.

![DemoImage](https://github.com/Tompish/CheckboxDropDown/blob/main/projects/checkboxddtest/src/assets/cbiDemo.png)

## Install

`npm i @tompish/checkboxddlib@latest`

## Usage

Import CheckboxInputModule into the appModule. 
Create a variable of the type CheckboxInputData in the .ts file.

`favouriteChar: CheckboxInputData = {checked: true, value: 'ZSS'};`

Add the element in the html file and use ngModel to bind the data.

`<checkboxinput [(ngModel)]="favouriteChar"></checkboxinput>`

Make a dropdown by changing the typescript variable to an array and changing the html code to:
```
<cbidropdown title="My Characters">
    <checkboxinput *ngFor="let myChar of arrayOfChars; let i=index" [(ngModel)]="arrayOfChars[i]"></checkboxinput>
</cbidropdown>
```

## Improvements
Feel free to post improvements or issues on the github page. 
