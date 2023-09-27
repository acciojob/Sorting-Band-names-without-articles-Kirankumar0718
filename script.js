let articleless=[];
let regexp=/\ba\b|\ban\b|\bthe\b/gi;
let arr= ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp ={};
for (let i=0;i<arr.length;i++)
	{
		let articlelessitem =arr[i].replace(regexp,"").trim();
		articleless.push(articlelessitem);
		mp[articlelessitem]=arr[i];
	}
articleless.sort();
let ans=[];
for(let i of articleless){
	ans.push(mp[i]);
}
