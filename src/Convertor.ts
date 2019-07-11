
type Resp = {
    text: string,
    g?: boolean,
    t?: boolean
}

export class Convertor {
    public static convertor(input: string): Resp {

        let ans = this.dictionary[input];
        if (!ans) {
            if (/[^うほっウホッゴリラごりら]/.test(input))
                return { text: "おまえ本当にゴリラか？ゴリラ語喋れよ", g: true };
            ans = this.randomDict[Math.floor(Math.random() * this.randomDict.length)];
        }
        return Object.assign({ text: ans }, { t: this.isTT(input) || this.isTT(ans) });
    }

    private static isTT(input: string): boolean {
        return input === "とみや" || input === "トミヤ";
    }

    static readonly dictionary: { [key: string]: string } = {
        "う": "ん？",
        "うほ": "おはよう",
        "ウホ": "やあ",
        "うっほ": "やっほー",
        "ウッホ": "元気？",
        "ゴリラ": "トミヤ",
        "とみや": "ごりら",
        "トミヤ": "ゴリラ",
        "大庭": "人間",
        "ごりら": "とみや",
        "うほうほ": "ボルダリング行こうぜ",
        "ウホウホ": "ボルダリング行こうぜ",
    }

    static readonly randomDict: string[] = [
        "ボルダリング行こうぜ",
        "草",
        "なんだてめえ",
        "最近雨が多いですね",
        "好きなタイプは？",
        "ちんぽは本当に神",
        "最近恋ゴリラができたわ",
        "おまえネットで俺のことばかにしてたよな",
        "ゴリラを笑うとき、貴様もまたゴリラやぞ",
        "しょうがないにゃあ",
        "でぇじょうぶ"
    ];
}
