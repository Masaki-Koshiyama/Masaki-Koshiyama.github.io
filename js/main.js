function janken(hand)
{
    let message1 = ''

    if (hand === 0)
    {
        message1 = 'グー';
    }
    else if (hand === 1)
    {
        message1 = 'チョキ';
    }
    else if (hand === 2)
    {
        message1 = 'パー';
    }
    else
    {
        message1 = 'エラー';
    }
    
    console.log(message1);
    const you = document.querySelector('#player');
    you.textContent = message1;

    let hand2 = Math.floor(Math.random() * 3);
    let message2 = '';

    if(hand2 === 0)
    {
        message2 = 'グー';
    }
    else if (hand2 === 1)
    {
        message2 = 'チョキ';
    }
    else if (hand2 === 2)
    {
        message2 = 'パー';
    }
    else
    {
        message2 = 'エラー';
    }

    console.log(message2);
    const me = document.querySelector('#cpu');
    me.textContent = message2;

    let result = '';
    if (hand === 0 && hand2 === 0)
    {
        result = 'あいこ';
    }
    else if (hand === 0 && hand2 === 1)
    {
        result = '君の勝ちだ';
    }
    else if (hand === 0 && hand2 === 2)
    {
        result = '君の負けだ';
    }
    else if (hand === 1 && hand2 === 0)
    {
        result = '君の負けだ';
    }
    else if (hand === 1 && hand2 === 1)
    {
        result = 'あいこ';
    }
    else if (hand === 1 && hand2 === 2)
    {
        result = '君の勝ちだ'
    }
    else if (hand === 2 && hand2 === 0)
    {
        result = '君の勝ちだ';
    }
    else if (hand === 2 && hand2 === 1)
    {
        result = '君の負けだ';
    }
    else if (hand === 2 && hand2 === 2)
    {
        result = 'あいこ';
    }
    else
    {
        result = 'エラー';
    }

    console.log(result);
    const kekka = document.querySelector('#result');
    kekka.textContent = result;
}