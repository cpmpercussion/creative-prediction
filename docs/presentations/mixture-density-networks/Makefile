slides :
	pandoc -t beamer mdn-lecture.md -o slides.pdf --pdf-engine=xelatex

doc :
	pandoc mdn-lecture.md -o RNN-talk-doc.pdf

reveal :
	pandoc -s --mathjax -i -t revealjs --metadata theme=white mdn-lecture.md -o index.html

reveal-syntax :
	pandoc -s --mathjax -i -t revealjs --metadata theme=white mdn-lecture.md -o index.html --no-highlight --variable hlss=zenburn --template=reveal-template.html
