import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
			<div style = "display: flex; flex-direction: column; height:100vh;">
            <nav class="navbar navbar-inverse">
			  <div class="container-fluid">
				<div class="navbar-header">
				  <a class="navbar-brand" href="#">Chat App</a>
				</div>
				<ul class="nav navbar-nav">
				  <li><a href="#">Page 1</a></li>
				  <li><a href="#">Page 2</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
				  <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
				  <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
				</ul>
			  </div>
			</nav>
			<div style="flex-grow: 1;">
				<div class="container-fluid" style="height:100%">
				  <div class="row" style="height:inherit">
					<div class="col-sm-2" style="background-color:lavender; height: 100%;">user information</div>
					<div class="col-sm-10" style="background-color:lavenderblush; height: 100%; display: flex; flex-direction: column;">
					
						<div style="flex-grow: 1;">
							region for displaying messages
						</div>
						<div style="background-color:#CCC; ">
							<input type="text" placeholder="Send message" style="margin:15px;" />
							<button>Send</button>
						</div>
					</div>
				  </div>
				</div>
			</div>
			<footer class="container-fluid text-center">
			  <h4 style="margin: 20px;">Hello there</h4>
			</footer>
			</div>
			`,
})
export class AppComponent  { name = 'Angular'; }
