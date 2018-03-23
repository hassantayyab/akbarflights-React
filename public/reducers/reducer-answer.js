import axios from 'axios';

var initialState = {
	status: '',
	hiLiCount: [1, 1, 1, 1],
	answers: [
		'On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida.Its mission was to go where no human being had gone before\u2014the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin.The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day.On July 21, 1969, at precisely 10: 56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon\u2019s surface.He declared, \u201CThat\u2019s one small step for man, one giant leap for mankind.\u201D It was a monumental moment in human history!It was July 21, 1969, and Neil Armstrong awoke with a start.It was the day he would become the first human being to ever walk on the moon.The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space.On board with Neil Armstrong were Michael Collins and Buzz Aldrin.The crew landed on the moon in the Sea of Tranquility a day before the actual walk.Upon Neil\u2019s first step onto the moon\u2019s surface, he declared, \u201CThat\u2019s one small step for man, one giant leap for mankind.\u201D It sure was!Here is the perfect system for cleaning your room.First, move all of the items that do not have a proper place to the center of the room.Get rid of at least five things that you have not used within the last year.Take out all of the trash, and place all of the dirty dishes in the kitchen sink.Now find a location for each of the items you had placed in the center of the room.For any remaining items, see if you can squeeze them in under your bed or stuff them into the back of your closet.See, that was easy!Oceans and lakes have much in common, but they are also quite different.Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water.Lakes are usually surrounded by land, while oceans are what surround continents.Both have plants and animals living in them.The ocean is home to the largest animals on the planet, whereas lakes support much smaller forms of life.When it is time for a vacation, both will make a great place to visit and enjoy.The Blue Whales just played their first baseball game of the new season; I believe there is much to be excited about.Although they lost, it was against an excellent team that had won the championship last year.The Blue Whales fell behind early but showed excellent teamwork and came back to tie the game.The team had 15 hits and scored 8 runs.That\u2019s excellent! Unfortunately, they had 5 fielding errors, which kept the other team in the lead the entire game.The game ended with the umpire making a bad call, and if the call had gone the other way, the Blue Whales might have actually won the game.It wasn\u2019t a victory, but I say the Blue Whales look like they have a shot at the championship, especially if they continue to improve.',

		"There are three reasons why I prefer jogging to other sports. One reason is that jogging is a cheap sport. I can practise it anywhere at any time with no need for a ball or any other equipment. Another reason why I prefer jogging is that it is friendly to my heart. I don’t have to exhaust myself or do excessive efforts while jogging. Finally, I prefer this sport because it is safe. It isn’t as risky as other sports like gymnastics, racing or horseback riding. For all these reasons, I consider jogging the best sport of all.There are three reasons why Canada is one of the best countries in the world. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed. Canadian cities have many parks and lots of space for people to live. As a result, Canada is a desirable place to live.Aspirin can be a fatal poison. People are used to taking aspirin whenever they feel pain. It is true that aspirin is an efficacious pain-killer for example in headache cases. However, aspirin is like any other medicine can be dangerously harmful. Any unregulated use of it may result into the damage to the lining of the stomach, prolonged bleeding time, nausea, vomiting, ulcers, liver damage, and hepatitis. It is scientifically proven that excessive use of aspirin turns it into a toxin. Its toxic effects are Kidney Damage, severe metabolic derangements, respiratory and central nervous system effects, strokes, fatal haemorrhages of the brain, intestines & lungs and eventually death. Thus, the careful and regulated use of aspirin is most advisable so as not to turn into a deadly poison.",

		'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.The Blue Whales just played their first baseball game of the new season; I believe there is much to be excited about. Although they lost, it was against an excellent team that had won the championship last year. The Blue Whales fell behind early but showed excellent teamwork and came back to tie the game. The team had 15 hits and scored 8 runs. That’s excellent! Unfortunately, they had 5 fielding errors, which kept the other team in the lead the entire game. The game ended with the umpire making a bad call, and if the call had gone the other way, the Blue Whales might have actually won the game. It wasn’t a victory, but I say the Blue Whales look like they have a shot at the championship, especially if they continue to improve.The school fair is right around the corner, and tickets have just gone on sale. We are selling a limited number of tickets at a discount, so move fast and get yours while they are still available. This is going to be an event you will not want to miss! First off, the school fair is a great value when compared with other forms of entertainment. Also, your ticket purchase will help our school, and when you help the school, it helps the entire community. But that’s not all! Every ticket you purchase enters you in a drawing to win fabulous prizes. And don’t forget, you will have mountains of fun because there are acres and acres of great rides, fun games, and entertaining attractions! Spend time with your family and friends at our school fair. Buy your tickets now!',

		'The school fair is right around the corner, and tickets have just gone on sale. Even though you may be busy, you will still want to reserve just one day out of an entire year to relax and have fun with us. Even if you don’t have much money, you don’t have to worry. The school fair is a community event, and therefore prices are kept low. Perhaps, you are still not convinced. Maybe you feel you are too old for fairs, or you just don’t like them. Well, that’s what my grandfather thought, but he came to last year’s school fair and had this to say about it: “I had the best time of my life!” While it’s true you may be able to think of a reason not to come, I’m also sure you can think of several reasons why you must come.  We look forward to seeing you at the school fair!Last week we installed a kitty door so that our cat could come and go as she pleases. Unfortunately, we ran into a problem. Our cat was afraid to use the kitty door. We tried pushing her through, and that caused her to be even more afraid. The kitty door was dark, and she couldn’t see what was on the other side. The first step we took in solving this problem was taping the kitty door open. After a couple of days, she was confidently coming and going through the open door. However, when we removed the tape and closed the door, once again, she would not go through. They say you catch more bees with honey, so we decided to use food as bait. We would sit next to the kitty door with a can of wet food and click the top of the can. When kitty came through the closed door, we would open the can and feed her. It took five days of doing this to make her unafraid of using the kitty door. Now we have just one last problem; our kitty controls our lives!People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won’t use kitty doors. First, they may not understand how a kitty door works. They may not understand that it is a little doorway just for them. Second, many kitty doors are dark and cats cannot see to the other side. As such, they can’t be sure of what is on the other side of the door, so they won’t take the risk. One last reason cats won’t use kitty doors is because some cats don’t like the feeling of pushing through and then having the door drag across their back. But don’t worry—there are solutions to this problem.'
	]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ANSWER_FETCH_REQUEST':
			return Object.assign({}, state, {
				status: action.status
			})

		case 'ANSWER_FETCH_SUCCESS':
			//console.log('in reducer-A:',action.payload);
			state.status = action.status;
			state.hiLiCount[action.id - 1] = action.hiLiCount;
			state.answers[action.id - 1] = action.answer;
			return Object.assign({}, state, {
				status: action.status
			})

		case 'USER_SELECTED':
			// console.log('hiLiCount in reducer:', action.hiLiCount);
			const data = {
				id: action.id,
				hiLiCount: action.hiLiCount,
				answer: action.answer
			}

			axios.post('/api/answer', data)
				.catch((err) => {
					console.log('Error in Answer Post:', err);
				});
			
			state.hiLiCount[action.id - 1] = action.hiLiCount;			
			state.answers[action.id - 1] = action.answer;
			return Object.assign({}, state, {
				status: action.status
			})

		default:
			return state
	}
}
