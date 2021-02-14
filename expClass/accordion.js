(() => {

	class Accordion {
		//初期化
		constructor(obj){
			//クラス…テンプレ　インスタンス…実際に使われているもの
			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName)

			const triggerLen = $trigger.length;
			let index = 0;
			while (index < triggerLen){
				// this…クラスそのものを参照。基本、クラスの中で関数を呼ぶときは、関数の前にクラスを指定する必要がある
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));
				index++;
			}
		}

		// クリックしたら実行される処理 ※クラスの中に関数を書く場合は、constとかは不要
		clickHandler(e){
			e.preventDefault();

			const $target = e.currentTarget;
			// 次のやつを持ってくるよ。 accordion-trigger → accordion-contents
			const $content = $target.nextElementSibling;

			if ($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display = 'block';
			}
		};
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p',
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a',
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt',
	});



})();