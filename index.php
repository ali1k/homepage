<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="personal home page of Dr. Ali Khalili">
    <meta name="author" content="Ali Khalili">

    <title>Ali Khalili -- home page</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.8.1/semantic.min.css" rel="stylesheet">

</head>

<body>

  <div class="ui sidebar">
    ...
  </div>

  <div class="ui top horizontal inverted sidebar menu" id="toc">
    <a class="item" href="#home">
      <i class="home icon"></i>
      Home
    </a>
    <a class="item" href="#about">
      <i class="smile icon"></i>
      About me
    </a>
    <a class="item" href="#education">
      <i class="university icon"></i>
      Education
    </a>
    <a class="item" href="#achievements">
      <i class="trophy icon"></i>
      Achievements
    </a>
    <a class="item" href="#publications">
      <i class="block book icon"></i>
      Publications
    </a>
    <a class="item" href="#development">
      <i class="terminal icon"></i>
      Development
    </a>
  </div>
  <div class="ui black launch right attached fixed button" onClick="toggleTOC();">
    <i class="content icon"></i>
  </div>


  <div class="ui vertically padded grid page pusher" id="home">
    <div class="three column row">
      <div class="wide column">

        <div class="ui card">
          <div class="ui slide masked reveal image">
            <img src="imgs/ali.jpg" class="visible content" style="opacity: 0.5;">
            <img src="imgs/ali_smile.jpg" class="hidden content" style="opacity: 0.9;">
          </div>
          <div class="content">
            <a class="header">Ali Khalili (Dr.-Ing.)</a>
            <div class="meta">
              <span class="date">Postdoctoral Researcher</span>
            </div>

            <div class="description">
              <a href="http://krr.cs.vu.nl/">Knowledge Representation & <br/>Reasoning Research Group</a> <br/>
      Dept. of Computer Science<br/> Faculty of Sciences <br/>
      <a href="http://vu.nl">Vrije Universiteit Amsterdam</a><br/> The Netherlands
      </div>
          </div>
          <div class="extra content">
            <a>
              <a title="bitbucket" href="https://bitbucket.org/ali1k"><i class="bitbucket icon"></i></a>
              <a title="github" href="https://github.com/ali1k/"><i class="github icon"></i></a>
              <a title="twitter" href="https://twitter.com/hyperir"><i class="twitter icon"></i></a>
              <a title="linkedin" href="http://nl.linkedin.com/in/ali1k"><i class="linkedin icon"></i></a>
              <a title="google plus" href="https://plus.google.com/u/0/+AliKhalili"><i class="google plus icon"></i></a>
              <a title="wordpress" href="http://ali1k.wordpress.com"><i class="wordpress icon"></i></a>
            </a>
          </div>
        </div>

      </div>

      <div class="wide column">

        <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/hyperir" data-widget-id="302344362019389440">Tweets by @hyperir</a>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

      </div>

      <div class="wide column">
        <div class="ui secondary segment attached top">
          My last blog posts <a href="https://ali1k.wordpress.com/feed/"><i class="feed icon"></i></a>
        </div>
        <div class="ui tall bottom vertical attached segment">
            <div class="ui divided list">
          <?php
            error_reporting(0);
            $rss = new DOMDocument();
            $rss->load('https://ali1k.wordpress.com/feed/');
            $feed = array();
            foreach ($rss->getElementsByTagName('item') as $node) {
              $item = array (
                'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
                'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
                'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,
                'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
                );
              array_push($feed, $item);
            }
            $limit = 5;
            for($x=0;$x<$limit;$x++) {
              $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
              $link = $feed[$x]['link'];
              $description = $feed[$x]['desc'];
              $date = date('l F d, Y', strtotime($feed[$x]['date']));
              echo '<div class="item"><div class="item"><a class="header" href="'.$link.'" title="'.$title.'">'.$title.'';
              echo '<div class="description"><small><em>Posted on '.$date.'</em></small></div></a></div></div>';
              //echo '<p>'.$description.'</p>';
            }
          ?>
          <div class="item"><div class="content"><a class="fluid mini ui button" href="http://ali1k.wordpress.com">Read More...</a></div></div>
          </div>
        </div>
        <div class="ui blue segment secondary" id="qod-quote">

          <i class="quote left icon"></i>... loading ...<i class="quote right icon"></i>

<script src="http://quotesondesign.com/api/3.0/api-3.0.js"
type="text/javascript" charset="utf-8"></script>
</div>
      </div>

    </div>
    <div class="one column row">

      <div class="column" id="about">
        <h3>About me</h3>
        <div class="ui tall stacked bottom vertical attached segment">

          <p style="text-align: justify">
            My name is Ali Khalili (علی خلیلی). I am a <a href="http://en.wikipedia.org/wiki/Semantic_Web"><i>Semantic Web</i></a> and <a href="http://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"><i>HCI</i></a> researcher and enthusiast.
            My main research interests lie in user interfaces and applications of the Semantic Web technologies.
            <a href="http://www.qucosa.de/recherche/frontdoor/?tx_slubopus4frontend%5bid%5d=urn:nbn:de:bsz:15-qucosa-159956">My PhD thesis</a> focused on <i>a semantics-based user interface model for content annotation, authoring and exploration</i>. I devised the <a href="http://www.semantic-web-journal.net/system/files/swj656.pdf">WYSIWYM</a> (What You See Is What You Mean) UI model to deal with semantically-enriched content.
            <br/>
            I have worked as a Web designer and developer for several years and have expertise in different Web technologies like PHP, JavaScript, NodeJS, etc. Application such as <a href="http://rdface.aksw.org">RDFaCE</a>, <a href="http://slidewiki.org">SlideWiki</a> and <a href="http://context.aksw.org">conTEXT</a> are some examples of my development work.
            <br/>
            I am originally form Iran and have been abroad (Germany, Netherlands) since 2009 to continue my education.
            My wife (Bita) is a pharmacist and pharmaceutical technology researcher.
            Besides my academic work, I enjoy reading novel and poetry books especially from Persian poets (e.g. <a href="http://en.wikipedia.org/wiki/Omar_Khayyam">Khayyam</a>, <a href="http://en.wikipedia.org/wiki/Saadi_(poet)">Saadi</a>, <a href="http://en.wikipedia.org/wiki/Hafez_Shirazi">Hafez</a>, <a href="http://en.wikipedia.org/wiki/Rumi">Rumi</a>).
            I also enjoy watching and playing soccer.
          </p>
        </div>

      </div>


  <div class="column" id="education">
    <h3>Education history</h3>
    <div class="ui tall bottom vertical attached segment">

      <div class="ui divided list">
        <div class="item">
          <img class="ui avatar image" src="imgs/vu.jpg">
          <div class="content">
            <a class="header" href="http://vu.nl">VU University Amsterdam, Netherlands</a>
            <div class="description">2015-present</div>
            <div class="ui horizontal label">Postdoctoral Researcher</div>
            <div class="description"><a href="http://krr.cs.vu.nl">Knowledge Representation & Reasoning Group</a></div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="imgs/leipzig.png">
          <div class="content">
            <a class="header" href="http://uni-leipzig.de">University of Leipzig, Germany</a>
            <div class="description">2011-2015</div>
            <div class="ui horizontal label">PhD, Computer Software Engineering</div>
            <div class="description"><a href="http://aksw.org">Agile Knowledge Engineering & Semantic Web Group</a></div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="imgs/vu.jpg">
          <div class="content">
            <a class="header" href="http://vu.nl">VU University Amsterdam, Netherlands</a>
            <div class="description">2010-2011</div>
            <div class="ui horizontal label">Research Assistant</div>
            <div class="description">Software & Service Engineering Group</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="imgs/kntu.jpg">
          <div class="content">
            <a class="header" href="http://kntu.ac.ir">K.N.Toosi University of Technology (K.N.Toosi), Tehran, Iran</a>
            <div class="description">2007-2009</div>
            <div class="ui horizontal label">M.Sc., IT Engineering (e-commerce)</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="imgs/sbu.jpg">
          <div class="content">
            <a class="header" href="http://sbu.ac.ir">Shahid Beheshti University (SBU), Tehran, Iran</a>
            <div class="description">2003-2007</div>
            <div class="ui horizontal label">B.Sc., Software Engineering</div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="column" id="achievements">
    <h3>Honors & Awards</h3>
    <div class="ui tall bottom vertical attached segment">

      <div class="ui divided list">
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label"> Best-paper Award</a> of the 36th IEEE Signature Conference on Computers, Software, and Applications (COMPSAC) 2012 for the paper <br/><i><a class="" href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6340208">The RDFa Content Editor - From WYSIWYG to WYSIWYM</a></i>.</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">Creative Innovation Project Award</a> 2014 for OpenCourseWare Excellence from OCW Consortium <br/>for developing the <a href="http://slidewiki.org">SlideWiki</a> OpenCourseWare platform.</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">1st Prize</a> of the AI Mashup Challenge 2014 (for the <a href="http://context.aksw.org">conTEXT Mashup platform</a>).</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">Best-application Prize</a> at WoLE2013 challenge (Doing Good by Linking Entities), WWW2013 workshops (for the <a href="http://bitili.com/pharmer">Pharmer</a> project).</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">Best-poster Award</a> at Leipzig Research Festival for Life Sciences 2012.</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">Nominated</a> for best-paper award in the 5th International Conference on Computer Supported Education (CSEDU 2013) for the paper "CrowdLearn: Crowd-sourcing the Creation of Highly-structured E-Learning Content".</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label">Nominated</a> for best-paper award in the 18th International Conference on Knowledge Engineering and Knowledge Management (EKAW 2012) for the paper "SlideWiki: Elicitation and Sharing of Corporate Knowledge using Presentations".</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description">Elsevier <a class="ui circular label">Travel Grant</a> to attend the Beyond the PDF 2 conference, Amsterdam, Netherlands (March 2013).</div>
          </div>
        </div>
        <div class="item"><i class="right triangle icon"></i>
          <div class="content">
            <div class="description"><a class="ui circular label" href="http://daad.de">DAAD (The German Academic Exchange Service) Scholarship</a> for studying PhD in Germany, 2012.</div>
          </div>
        </div>

      </div>

    </div>

  </div>

  <div class="column" id="publications">
    <h3>List of publications</h3>
    <div class="ui tall bottom vertical attached center aligned segment">
      <a href="https://scholar.google.com/citations?user=dSMSH2wAAAAJ&hl=en" class="ui circular blue button"><img class="ui avatar image" src="imgs/gscholar.png">Google Scholar</a>
      <a href="http://dblp1.uni-trier.de/pers/hd/k/Khalili:Ali" class="ui circular button"><img class="ui avatar image" src="imgs/dblp.jpeg"> DBLP</a>
      <a href="http://www.bibsonomy.org/user/alikhalili" class="ui circular green button"><img class="ui avatar image" src="imgs/bibsonomy.png"> Bibsonomy</a>
    </div>

  </div>

  <div class="column" id="development">
    <h3>Software projects developed by me</h3>
    <div class="ui tall bottom vertical attached segment">
      <div class="ui divided list">

      <div class="item">
        <img class="ui mini image" src="imgs/slidewiki.png">
        <div class="content">
          <a class="header" href="http://slidewiki.org">SlideWiki</a>
          <div class="description">A platform for collaborative authoring of OpenCourseWare.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui mini image" src="imgs/context.png">
        <div class="content">
          <a class="header" href="http://context.aksw.org">conTEXT</a>
          <div class="description">Lightweight Text Analytics using Linked Data.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui mini image" src="imgs/rdface.gif">
        <div class="content">
          <a class="header" href="http://rdface.aksw.org">RDFaCE</a>
          <div class="description">A WYSIWYM interface for authoring of semantic content.</div>
        </div>
      </div>
      <div class="item">
        <img class="ui mini image" src="imgs/pharmer.png">
        <div class="content">
          <a class="header" href="http://slidewiki.org">Pharmer</a>
          <div class="description">A WYSIWYM interface for authoring of semantic medical prescriptions.</div>
        </div>
      </div>
      <div class="item"><div class="content"><a class="fluid tiny ui button" href="http://github.com/ali1k">More projects...</a></div>
    </div>

  </div>
  </div>


  <div class="column" id="development">
    <br/>
    <div class="ui tall center aligned segment">

      <p class="text center">
        This website is powered by <a href="http://semantic-ui.com/">Semantic-UI</a> framework.
      </p>
    </div>

  </div>

</div>
  </div>


<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.8.1/components/sidebar.min.js"></script>
    <!-- Custom Theme JavaScript -->
    <script type="text/javascript">
    function toggleTOC(){
      $('#toc')
    .sidebar('toggle');
    $('#home').css('padding-top','60px');
    }
    </script>
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-38515398-1', 'auto');
  ga('send', 'pageview');

</script>
</body>

</html>
