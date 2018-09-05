slides :
	pandoc -t beamer RNN-talk-slides.md -o slides.pdf

doc :
	pandoc RNN-talk-slides.md -o RNN-talk-doc.pdf

reveal :
	pandoc -s --mathjax -i -t revealjs RNN-talk-slides.md -o index.html
