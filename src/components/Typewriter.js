import React, { PureComponent } from 'react';
import DisplayIntro from './DisplayIntro'

class Typewriter extends PureComponent {

	constructor(){
		super()
		this.state = {
			stopCode: false
		}
	}


test = () => {
	window.addEventListener('DOMContentLoaded', (event) => {
		
		let setupTypewriter = (t) => {
			let HTML = t.innerHTML;

			const text = t.innerHTML
			
			t.innerHTML = ''

			let i = 0

			let cursorPosition = 0,
				tag = "",
				writingTag = false,
				tagOpen = false,
				typeSpeed = 6,
				tempTypeSpeed = 2;

			let type = () => {
			
				if (writingTag === true) {
					tag += HTML[cursorPosition];
				}

				if (HTML[cursorPosition] === "<") {
					tempTypeSpeed = 0;
					if (tagOpen) {
						tagOpen = false;
						writingTag = true;
					} else {
						tag = "";
						tagOpen = true;
						writingTag = true;
						tag += HTML[cursorPosition];
					}
				}
				if (!writingTag && tagOpen) {
					tag.innerHTML += HTML[cursorPosition];
				}
				if (!writingTag && !tagOpen) {
					if (HTML[cursorPosition] === " ") {
						tempTypeSpeed = 0;
					}
					else {
						tempTypeSpeed = (Math.random() * typeSpeed) + 50;
						
						if(i < 164){
						i ++}
					}
					t.innerHTML += HTML[cursorPosition];
				}
				if (writingTag === true && HTML[cursorPosition] === ">") {
					tempTypeSpeed = (Math.random() * typeSpeed) + 50;
					writingTag = false;
					if (tagOpen) {
						let newSpan = document.createElement("span");
						t.appendChild(newSpan);
						newSpan.innerHTML = tag;
						tag = newSpan.firstChild;             
					}
				}

				cursorPosition += 1;
				if (cursorPosition < HTML.length - 1) {
					setTimeout(type, tempTypeSpeed);
				}

				document.addEventListener("keydown", function(){
					
				i = 164
								
				}, false)

				if (i === 164) {
				this.setState({stopCode: true})
				t.innerHTML = text
				}
			
			}
			return {
				type: type
			};
		}


		let typer = document.getElementById('typewriter');

		let typewriter = setupTypewriter(typer);

		typewriter.type(this);

	});
}
	
	render() {
		return (
		<>
			<div>
				<DisplayIntro test={this.test()} stopCode={this.state.stopCode}/>
			</div>
			</>
		)
	}
}

export default Typewriter;