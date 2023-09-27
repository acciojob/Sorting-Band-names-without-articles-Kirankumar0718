let articleless=[];
let regexp=/\ba\b|\ban\b|\bthe\b/gi;
let arr= ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
for (let i=0;i<arr.length;i++)
	{
		let articlelessitem =arr.replace(regexp,"");
		articleless.push(articlelessitem);
	}
console.log(articleless);
