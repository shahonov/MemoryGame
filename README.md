# FrontEnd.MemoryGame

__Single Page Application__ (SPA) with a popular **Memory Game**, built with **HTML**, **CSS** and **JavaScript**


Styles (CSS) are written, considering Google Chrome, so the application may behave differently on other browsers.


The game has simple **User Interface**, which includes:
	- **1 Header** - __Memorize It!__
	- **2 Buttons** - __Start and Restart__
	- **1 Message Field** - __Shows interactive in-game messages__
	- **16 Cards** - __8 pair of 2 identical (animal icons) cards__
	- **3 In-Game Statistical Fields** - __Count of Attempts, Rating (based on count of attempts) and Time Elapsed__


Once the **Start Button** is clicked - images will be placed __randomly__ on the back of each card and the timer begins to tick.


Single attempt in the game context is when **2 cards are flipped with their face up**.
	Flipping 2 cards is coming with 2 possible results:
		if the cards **doesn't match** - the attempt is __unsuccessfull__ and the cards are flipped with their face down.
		if the cards **does match** - the attempt is __successfull__ and the cards remains with their face up and becomes unable to be clicked


On each card click a message is displayed in the __in-game interactive message box__, 
**considering the type of the image (on each odd click)** or **match result (on each even click)**


Rating statistic is based on the attempts count:
	- if attempts count is **less than 20** - rating will be **3 stars**
	- if attempts count is **between 20 and 39 (including)** - rating will be **2 stars**
	- if attempts count is **more than 40** - rating will be **1 star**


Once all cards are matched - a **Modal Window** will __Pop-Up__, exposing game statistics __(attempts, rating and time elapsed)__