---
layout: reveal
title: References, Citations, Publishing, and Authorship
theme: assets/revealthemes/crepre.scss
center: true
revealified: true
---


{% include slides/title.html %}

## What is a research paper?

## from manuscript to published paper...

## citations

## BibTeX

## DOIs (Digital Object Identifier)

## Our aim:

- Our aim with this course is that every group would prepare a paper that could be published in an academic conference!
- Your final paper may not be quite acceptable for publication yet.
- We can help you get it up to scratch.
- We can also help you attend a conference to present your work.
- ( We would expect to be co-authors of a paper after collaborating on these tasks! :-D )

## Publishing a Paper!

- Academics publish research as part of their job!
- Usually publishing is tied to important stuff: e.g., promotion, funding, number of PhD places, prestige.
- We also LIKE to publish! We want to tell people about our work and want to read about what others are doing!
- PhD students usually have to publish in order to get their degree!
- Publishing can look a bit different between disciplines.
- In computer science we have two main ways to publish:
- Conferences: e.g., International Conference on Machine Learning
- Journals: e.g., IEEE Transactions on Neural Networks and Learning Systems

## Journal


![journal production]({% link assets/authorship/journal-production-process.jpg %}){: style="width:50%;float:right;"}

1. Send a manuscript to the journal when ready.
2. 1+ rounds of reviewing and changes
3. Manuscript is turned into an article by the journal staff
4. Published online (sometimes print…)

## Conference

- Submit paper on conference website by a deadline.
- All papers are reviewed at once. 
- Usually only one round of review! → accepted or rejected.
- If accepted, polish up paper for “camera ready”
- Attend conference, give talk (10-15mins) or present a poster. Meet other researchers, have a good time.
- Paper appears in the “Proceedings of the Conference” which are published online.

## Computer Science

- Conference papers have page limits
- Journal articles tend to be a bit longer
- Most CS academics treat conference papers and journal articles as being equally “worthy” of reading.
- Other fields consider conference papers to be inconsequential or early-stage, will only look at articles and books for serious contributions.
- Normally we would suggest honours/Master students go for a conference paper!


## Quality and Competition

Not all conferences equal!

Acceptance rates:

- Difficult conferences < 20% papers accepted
- Easier conferences > 50% papers accepted → often focussed on a niche area.

- For “prestigious” conferences and journals, there are so many (1000s) submissions, that editors screen out papers that are unlikely to be accepted by reviewers.
- Ranking for conferences tends to be anecdotal.
- Journals often ranked by “Impact Factor”, roughly, “how many citations does the average paper get in one year”
- Academics often consider too much focus on rankings to be harmful.
- But we usually look anyway, as we want evidence that of excellence.

## For you!

- Do you want to take your research further?
- Do you want to attend a conference?
- Submit your paper to a conference!

- Requires more revision after deadline.
- Meetings with mentors/supervisors to make sure work is up to scratch.

## Who should be an author?

- Who deserves credit for a work?
- Movies do this well… everybody involved is listed with their role made very clear!
- Academic Papers are not so clear...

![]({% link assets/authorship/movie-credits.jpg %}){: style="width:36%"}
![]({% link assets/authorship/movie-credits-2.jpg %}){: style="width:40%"}

## Giving Credit Where Credit is Due

![]({% link assets/authorship/author-list-phdcomics.gif %}){: style="width:80%"}

<http://phdcomics.com/comics/archive.php?comicid=562>

## Problems...

![]({% link assets/authorship/physical-review-letters-title.jpg %}){: style="width:40%;float:right;"}

![]({% link assets/authorship/authorship-problems.jpg %}){: style="width:35%"}

![]({% link assets/authorship/physical-review-letters-authors.jpg %}){: style="width:40%;float:right;"}

![]({% link assets/authorship/authors-per-paper.png %}){: style="width:25%"}


## Different Subjects Do this Differently

![]({% link assets/authorship/authors-by-field.jpg %}){: style="width:65%"}


## Vancouver Recommendations - 4 Criteria

1. **Substantial contributions** to the **conception** or **design** of the work; or the **acquisition**, **analysis**, or **interpretation** of data for the work; AND
2. **Drafting** the work or **revising** it critically for important intellectual content; AND
3. **Final approval** of the version to be published; AND
4. **Agreement to be accountable** for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.

All those designated as authors should meet **all four criteria for authorship**, and **all who meet the four criteria should be identified as authors**. Those who do not meet all four criteria should be acknowledged.

...

These authorship criteria are intended to reserve the status of authorship for those who **deserve credit** and can take **responsibility** for the work. The criteria are **not intended for use as a means to disqualify colleagues** from authorship who otherwise meet authorship criteria by denying them the opportunity to meet criterion #2 or #3.


## UiO's 10 commandments for ethical practice in research

1. You shall be guided by the rights and duties spelled out in the Law of Academic Freedom.
2. You shall know that honesty is an absolute requisite for scientific work.
3. You shall act in accordance with ethical guidelines for your area of research.
4. You shall give due recognition to colleagues and sources that have aided your own investigation.
5. You shall, if at all possible, participate in collegial analysis and communication of methods and results.
6. You shall be prepared to account for all means and resources that you have received.
7. You shall ensure that your scientific results are solid enough to justify your conclusions and that the raw data/materials on which your publications are based remain intact and available.
8. You shall adhere to the rules that govern publications in your field.
9. You shall strive to be level-headed when you report your results; consequential considerations should include both potential benefits and would-be ethical dilemmas.
10. You shall maintain your scientific competency and also seek to improve it.

<https://www.uio.no/english/for-employees/support/research/ethics/10-commandements.html>

## My Policy (Charles)

- Giving authorship credit is free, so I’m relaxed about giving credit to those who have contributed to the research process.
- I tend to have papers with 2-4 authors involved, so it’s easy to make sure that all have a chance to revise the text before submission.
- Could be hands-on editing of the tex file.
- Or marking up a printed out copy of the paper.
- I also write (a few) single author papers; for these, I make clear that it is just me before asking supervisors/mentors to read it.

# Linking to Code, Data, Video, Audio

Can we include a video in a paper? How about code?

Is it enough to include a _Dropbox_ link? What about _YouTube_?

What happens if _YouTube_ goes out of business?

**Websites change, papers should be forever** (or at least a long time...)

## Linking to Code and Data

![]({% link assets/authorship/code-paper.png %}){: style="width:50%;float:right;"}

Becoming more standard these days to link to code or data in a publication. Really good idea:

- Reproducibility
- More convincing for special application areas (e.g., music, robotics, video)
- Some authors make a “web” version of their paper with videos and interactive stuff: e.g., <https://worldmodels.github.io>

## Linking to Data: Zenodo

![]({% link assets/authorship/video-zenodo.png %}){: style="width:50%;float:right;"}

Linking to Data: 

- I usually put videos, audio samples on Zenodo
- Include link with DOI in paper
- Can also be “cited”, e.g.:

```
@misc{martin_charles_patrick_2018_1215956,
  author       = {Martin, Charles Patrick and  Jensenius, Alexander Refsum and
                  Johnson, Victoria and Bjerkestrand , Kari Anne Vadstensvik},
  title        = {Stillness Under Tension for Myo+Bela Quartet},
  month        = apr,
  year         = 2018,
  doi          = {10.5281/zenodo.1215956},
  url          = {https://doi.org/10.5281/zenodo.1215956}
}
```

## Linking to Code: Zenodo as well!

![]({% link assets/authorship/code-zenodo.jpg %}){: style="width:50%;float:right;"}

- You can connect Zenodo to a Github Repository!
- Each release is given a new DOI.
- A zipfile of the release is stored forever.

![]({% link assets/authorship/code-github.png %}){: style="width:50%;"}

## Make a video!

- Many conferences ask for a video demo or short explanation (e.g., 60 seconds)
- Great idea for communicating research!

![]({% link assets/authorship/video-dyret.jpg %}){: style="width:50%;"}

