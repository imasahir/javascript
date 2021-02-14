// const unkoooo = 'うんこ'
// ↑何もないところでこれを書くと、別ファイルでもこの変数が使えてしまう。

// 即時関数　←これをなしでやるとグローバルを汚染してしまう。
(()=>{
	/**
	 * 定数設定
	 */
	// DOM…HTMLページを構成する要素、みたいな意味
	const $doc = document;
	const $tab = $doc.getElementById('js-tab');
	// querySelectorAll…DOM要素の中から条件に当てはまるDOMを取得する
	// 変数に$マークをつけると、DOM要素であることを明示できる。
	const $nav = $tab.querySelectorAll('[data-nav]');
	const $content = $tab.querySelectorAll('[data-content]');
	const ACTIVE_CLASS = 'is-active';
		// 完全な定数は大文字英数が多い。
	const navLen = $nav.length;

	/**
	 * ここまで
	 */

	// init…initialize(初期化)という意味。はじめに実行させる関数名によく使う。
	const init = () =>{
		$content[0].style.display = 'block';
	};
	init();

	//**クリックしたら起こるイベント
		// e…下の場合だと、クリックした時のイベント情報を引数にしている。
	const handleClick = (e) => {
			// preventDefault…そしてそのeクリックイベントを取り消す。※aタグの遷移を取り消してる。
		e.preventDefault();

		//**クリックされたnavとそのdataを取得
		const $this = e.target;
			// ↓htmlでdata-navで指定した数字を取れる。※dataset.属性名
		const targetVal = $this.dataset.nav;

		//**nav, contentを全て一旦リセットする
		let index = 0;
		while (index < navLen){
			$content[index].style.display = 'none';
			$nav[index].classList.remove(ACTIVE_CLASS);
			index++;
		}

		//**対象のコンテンツをアクティブ化する。
		$tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
			// classList…DOM要素が持っているクラスをすべて表示する。
			// add()…リストの中に、引数の文字列を追加する。
		$nav[targetVal].classList.add(ACTIVE_CLASS);
	};

	// 全nav要素に対して命令を関数を適用
	let index = 0;
	while (index < navLen){
		$nav[index].addEventListener('click', (e) => handleClick(e));
		index++;
	}

})();