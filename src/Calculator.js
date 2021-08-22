import React, { Component } from 'react';

const DIGIT_LIMIT = 22;
const equals = {id: "equals", value: "="};
const numbers = [{id: "zero", value: 0}, {id: "one", value: 1}, {id: "two", value: 2}, {id: "three", value: 3}, {id: "four", value: 4}, 
{id: "five", value: 5}, {id: "six", value: 6}, {id: "seven" , value: 7}, {id: "eight" , value: 8}, {id: "nine" , value: 9}];
const operators = [{id: "add", value: "+"}, {id: "subtract", value: "-"}, {id: "multiply", value: "x"}, {id: "divide", value: "/"}];
const decimal = {id: "decimal", value: "."};
const clear = {id: "clear", value: "AC"};

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displayCharacters: [],
          currVal: [],
          numOperators: 0,
          prevCalculation: [],
          result: [],
          exceedLimit: false
        };
        this.clear  = this.clear.bind(this);
        this.addCharacter = this.addCharacter.bind(this);
        this.calculate = this.calculate.bind(this);
        this.isOperator = this.isOperator.bind(this);
        
      } 
      isOperator(char) {
        const operatorList = ["+", "-", "x", "⋅", "/"];
        return operatorList.includes(char);
      }
      calculate() {
        let currExpression = [];
        for (let i = 0; i < this.state.displayCharacters.length; i++) {
          if (this.state.displayCharacters[i] === "⋅") {
            currExpression.push("*");
          } else {
            currExpression.push(this.state.displayCharacters[i]);
          }
        }
        let topCharacter = currExpression[currExpression.length - 1];
        while (currExpression.length > 0 && this.isOperator(topCharacter)) {
          currExpression.pop();
          topCharacter = currExpression[currExpression.length - 1];
        }
        try {
          let result = Math.round((eval(currExpression.join('')) + Number.EPSILON) * 10000) / 10000;
          for (let i = 0; i < currExpression.length; i++) {
            if (currExpression[i] === "*") {
              currExpression[i] = "⋅";
            } 
          } 
          currExpression.push('=');
          this.setState({prevCalculation: currExpression, displayCharacters: [], currVal: [], result: [result]});
        } catch (error) {
          console.error(error);  
        }
      }
      
      addCharacter(key) {
        if (this.state.displayCharacters.length >= DIGIT_LIMIT) {
          this.setState({exceedLimit: true});
          setTimeout(() => {this.setState({exceedLimit: false});}, 900);
          return;
        }
        if (key !== 0 || this.state.displayCharacters.length > 0) {
          let newVal = [...this.state.currVal];
          let newDisplay = [...this.state.displayCharacters]; 
          
          if (this.isOperator(key)) {
            newVal = [key];
            if (key === 'x') {
              key = '⋅'
            }
            newDisplay = newDisplay.concat(this.state.result);        
            let topCharacter = newDisplay[newDisplay.length - 1];
            if (this.state.numOperators >= 1) {
              if (key === '-') {
                if (topCharacter !== '-') {
                  newDisplay.push(key);
                }
              } else {
                while(newDisplay.length > 0 && this.isOperator(topCharacter)) {
                  newDisplay.pop();
                  topCharacter = newDisplay[newDisplay.length - 1];
                }
                newDisplay.push(key);
              }
            } else {
              newDisplay.push(key);
            }
            this.setState({numOperators: this.state.numOperators + 1});
            
          } else if (key === ".") {
            let hasDecimal = false;
            if (newVal.length === 0 || this.isOperator(newVal[0])) {
               newVal.push(0);
               newDisplay.push(0);
               newVal.push(key);
               newDisplay.push(key);
            } else {
              for (let i = 0; i < newVal.length; i++) {
                if (newVal[i] === '.') {
                  hasDecimal = true;
                  break;
                }
              
              } 
              if (!hasDecimal) {
                newVal.push(key);
                newDisplay.push(key);
              }
            }
            
          } else {
              let topCharacter = newDisplay[newDisplay.length - 1];
              if (this.isOperator(topCharacter)) {
                newVal = [key];
              } else {
                newVal.push(key);
              }
              newDisplay.push(key);
              this.setState({numOperators: 0})
           }
          this.setState({displayCharacters: newDisplay, currVal: newVal, prevCalculation: [], result:[]});
        }
        
      }
      clear() {
        this.setState({prevCalculation: [], displayCharacters: [], currVal: [], result: []})
      }
      render() {
        let inputString = this.state.displayCharacters.length > 0? this.state.displayCharacters.join(''): 
                          this.state.prevCalculation.length > 0? this.state.prevCalculation.concat(this.state.result): 
                          " ";
        let displayString = "";
        if (!this.state.exceedLimit) {
           displayString = this.state.currVal.length > 0? this.state.currVal.join(''): 
                            this.state.result.length > 0?this.state.result.join(''): 
                            '0';
        } else  {
          displayString = "DIGIT LIMIT EXCEED";
        }
       
        return (
          <div className="grid-container">
            <div id={equals.id} onClick={this.calculate} style={{gridArea: equals.id}}>{equals.value}</div>
            {numbers.map((number, index) => {
                  return <div key={index} id={number.id} className="input-button" onClick={() => this.addCharacter(number.value)} style={{gridArea: number.id}}>{number.value}</div>;
                })}  
            {operators.map((operator, index) => {
                  return <div key={index} id={operator.id} className="input-button" onClick={() => this.addCharacter(operator.value)} style={{gridArea: operator.id}}>{operator.value}</div>;
                })} 
            <div id={decimal.id} className="input-button" onClick={() => this.addCharacter(decimal.value)} style={{gridArea: decimal.id}}>{decimal.value}</div>
            <div id={clear.id} className="input-button" onClick={this.clear} style={{gridArea: clear.id}}>{clear.value}</div>
            <div id="input" style={{gridArea: "input"}}>{inputString}{}</div>
            <div id="display" style={{gridArea: "output"}}>{displayString}</div>            
          </div>
          );
      }
}


