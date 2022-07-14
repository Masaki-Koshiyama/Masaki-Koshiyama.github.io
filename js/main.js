// alert('hogehoge')

let count = 0;
while (count < 5)
{
    console.log("while文のテスト: "+ count + "回目のループです.")
    count++;
}

for (let i = 0; i < 5; i++)
{
    console.log("for文のテスト: "+ i + "回目のループです.")
    
}

let player_hand = ['グー','チョキ','パー'];

console.log('配列の長さ:' + player_hand.length);

for (let i = 0; i < player_hand.length; i++)
{
    console.log(player_hand[i]);
}

let judge = 0;
if (judge > 0)
{
    console.log('judgeは正の値です.');
}
else if (judge === 0)
{
    console.log('judgeは0です.');
}
else if (judge < 0)
{
    console.log('judgeは負の値です.');
}
else
{
    console.log('judgeは数字ではありません.');
}

function hello(language)
{
    let message = '';

    if (language === 1)
    {
        message = 'こんにちは';
    }
    else if (language === 2)
    {
        message = 'Hello';
    }
    else if (language === 3)
    {
        message = '你好';
    }
    else if (language === 4)
    {
        message = '안녕하세요';
    }
    else
    {
        message = '想定されていない引数です';
    }

    console.log(message);

    const hogehoge = document.querySelectora('#hello');
    hogehoge.textContent = message;

}

