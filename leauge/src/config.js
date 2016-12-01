import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuController from 'controller/menu';

// Initalizing Angular App
const app = angular.module('app', [uiRouter]);

app.directive("menuone", function(){
  return {
    restrict: 'E',
    template: require('directives/menuone.html')
  }
});

app.directive("menuthree", function(){
  return {
    restrict: 'E',
    template: require('directives/menuthree.html')
  }
});

app.directive("menufour", function(){
  return {
    restrict: 'E',
    template: require('directives/menufour.html')
  }
});

app.directive("previewteam", function(){
  return {
    restrict: 'E',
    template: require('directives/previewteam.html')
  }
});

app.directive("previewservice", function(){
  return {
    restrict: 'E',
    template: require('directives/previewservice.html')
  }
});

app.directive("postproductcontractors", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductcontractors.html')
  }
});

app.directive("previewjob", function(){
  return {
    restrict: 'E',
    template: require('directives/previewjob.html')
  }
});

app.directive("previewtask", function(){
  return {
    restrict: 'E',
    template: require('directives/previewtask.html')
  }
});

app.directive("listproject", function(){
  return {
    restrict: 'E',
    template: require('directives/listproject.html')
  }
});

app.directive("teamgrid", function(){
  return {
    restrict: 'E',
    template: require('directives/teamgrid.html')
  }
});

app.directive("posticonprogress", function(){
  return {
    restrict: 'E',
    template: require('directives/posticonprogress.html')
  }
});

app.directive("postoverall", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverall.html')
  }
});

app.directive("postoverallvideo", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallvideo.html')
  }
});

app.directive("postoveralldevelopment", function(){
  return {
    restrict: 'E',
    template: require('directives/postoveralldevelopment.html')
  }
});

app.directive("postoverallsliderdevelopment", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallsliderdevelopment.html')
  }
});

app.directive("posttop", function(){
  return {
    restrict: 'E',
    template: require('directives/posttop.html')
  }
});

app.directive("teamtop", function(){
  return {
    restrict: 'E',
    template: require('directives/teamtop.html')
  }
});

app.directive("sceneover", function(){
  return {
    restrict: 'E',
    template: require('directives/sceneover.html')
  }
});

app.directive("sceneoffice", function(){
  return {
    restrict: 'E',
    template: require('directives/sceneoffice.html')
  }
});

app.directive("sceneofficedark", function(){
  return {
    restrict: 'E',
    template: require('directives/sceneofficedark.html')
  }
});

app.directive("sceneofficeleft", function(){
  return {
    restrict: 'E',
    template: require('directives/sceneofficeleft.html')
  }
});

app.directive("lightofficespieces", function(){
  return {
    restrict: 'E',
    template: require('directives/lightofficespieces.html')
  }
});

app.directive("darkofficespieces", function(){
  return {
    restrict: 'E',
    template: require('directives/darkofficespieces.html')
  }
});

app.directive("sceneofficeright", function(){
  return {
    restrict: 'E',
    template: require('directives/sceneofficeright.html')
  }
});

app.directive("teamjobpopin", function(){
  return {
    restrict: 'E',
    template: require('directives/teamjobpopin.html')
  }
});

app.directive("postgraphictop", function(){
  return {
    restrict: 'E',
    template: require('directives/postgraphictop.html')
  }
});

app.directive("postinfoslider", function(){
  return {
    restrict: 'E',
    template: require('directives/postinfoslider.html')
  }
});

app.directive("teaminfoslider", function(){
  return {
    restrict: 'E',
    template: require('directives/teaminfoslider.html')
  }
});

app.directive("postoveralldesign", function(){
  return {
    restrict: 'E',
    template: require('directives/postoveralldesign.html')
  }
});

app.directive("postoverallsliderdesign", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallsliderdesign.html')
  }
});

app.directive("postoverallicons", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallicons.html')
  }
});

app.directive("postoverallslidericons", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallslidericons.html')
  }
});

app.directive("postoverallslider", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallslider.html')
  }
});

app.directive("postoverallslidervideo", function(){
  return {
    restrict: 'E',
    template: require('directives/postoverallslidervideo.html')
  }
});

app.directive("menutop", function(){
  return {
    restrict: 'E',
    template: require('directives/menutop.html')
  }
});

app.directive("menubottom", function(){
  return {
    restrict: 'E',
    template: require('directives/menubottom.html')
  }
});

app.directive("menuarrows", function(){
  return {
    restrict: 'E',
    template: require('directives/menuarrows.html')
  }
});

app.directive("brandsteps", function(){
  return {
    restrict: 'E',
    template: require('directives/brandsteps.html')
  }
});

app.directive("brandpartners", function(){
  return {
    restrict: 'E',
    template: require('directives/brandpartners.html')
  }
});

app.directive("brandcontractors", function(){
  return {
    restrict: 'E',
    template: require('directives/brandcontractors.html')
  }
});

app.directive("brandphotocollage", function(){
  return {
    restrict: 'E',
    template: require('directives/brandphotocollage.html')
  }
});

app.directive("postproductplan", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductplan.html')
  }
});

app.directive("postproductplanphoto", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductplanphoto.html')
  }
});

app.directive("postproductprep", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductprep.html')
  }
});

app.directive("postproductprepphoto", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductprepphoto.html')
  }
});

app.directive("postproductperform", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductperform.html')
  }
});

app.directive("postproductperformphoto", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductperformphoto.html')
  }
});

app.directive("postproductperfect", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductperfect.html')
  }
});

app.directive("postproductperfectphoto", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductperfectphoto.html')
  }
});

app.directive("postbrandinfo", function(){
  return {
    restrict: 'E',
    template: require('directives/postbrandinfo.html')
  }
});

app.directive("postprocon", function(){
  return {
    restrict: 'E',
    template: require('directives/postprocon.html')
  }
});

app.directive("postabouttabs", function(){
  return {
    restrict: 'E',
    template: require('directives/postabouttabs.html')
  }
});

app.directive("posticonstop", function(){
  return {
    restrict: 'E',
    template: require('directives/posticonstop.html')
  }
});


app.directive("postmorefromauthor", function(){
  return {
    restrict: 'E',
    template: require('directives/postmorefromauthor.html')
  }
});

app.directive("postproducttop", function(){
  return {
    restrict: 'E',
    template: require('directives/postproducttop.html')
  }
});

app.directive("teamvideo", function(){
  return {
    restrict: 'E',
    template: require('directives/teamvideo.html')
  }
});

app.directive("postproductpartners", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductpartners.html')
  }
});

app.directive("postdesigntools", function(){
  return {
    restrict: 'E',
    template: require('directives/postdesigntools.html')
  }
});

app.directive("posttimelineinfoslider", function(){
  return {
    restrict: 'E',
    template: require('directives/posttimelineinfoslider.html')
  }
});

app.directive("timelineinfo", function(){
  return {
    restrict: 'E',
    template: require('directives/timelineinfo.html')
  }
});

app.directive("posttimeline", function(){
  return {
    restrict: 'E',
    template: require('directives/posttimeline.html')
  }
});

app.directive("postscopeofwork", function(){
  return {
    restrict: 'E',
    template: require('directives/postscopeofwork.html')
  }
});

app.directive("postserviceslist", function(){
  return {
    restrict: 'E',
    template: require('directives/postserviceslist.html')
  }
});

app.directive("posttestimonal", function(){
  return {
    restrict: 'E',
    template: require('directives/posttestimonal.html')
  }
});

app.directive("posttestimonalleft", function(){
  return {
    restrict: 'E',
    template: require('directives/posttestimonalleft.html')
  }
});

app.directive("posttestimonalright", function(){
  return {
    restrict: 'E',
    template: require('directives/posttestimonalright.html')
  }
});

app.directive("authortestimonal", function(){
  return {
    restrict: 'E',
    template: require('directives/authortestimonal.html')
  }
});

app.directive("authorsquare", function(){
  return {
    restrict: 'E',
    template: require('directives/authorsquare.html')
  }
});

app.directive("brandiconsquare", function(){
  return {
    restrict: 'E',
    template: require('directives/brandiconsquare.html')
  }
});

app.directive("brandiconslider", function(){
  return {
    restrict: 'E',
    template: require('directives/brandiconslider.html')
  }
});

app.directive("codetab", function(){
  return {
    restrict: 'E',
    template: require('directives/codetab.html')
  }
});

app.directive("iconslider", function(){
  return {
    restrict: 'E',
    template: require('directives/iconslider.html')
  }
});

app.directive("posttool", function(){
  return {
    restrict: 'E',
    template: require('directives/posttool.html')
  }
});

app.directive("postvideotwo", function(){
  return {
    restrict: 'E',
    template: require('directives/postvideotwo.html')
  }
});


app.directive("posttabcolor", function(){
  return {
    restrict: 'E',
    template: require('directives/posttabcolor.html')
  }
});

app.directive("postfollow", function(){
  return {
    restrict: 'E',
    template: require('directives/postfollow.html')
  }
});

app.directive("teamresume", function(){
  return {
    restrict: 'E',
    template: require('directives/teamresume.html')
  }
});

app.directive("whitegrid", function(){
  return {
    restrict: 'E',
    template: require('directives/whitegrid.html')
  }
});

app.directive("whitefooter", function(){
  return {
    restrict: 'E',
    template: require('directives/whitefooter.html')
  }
});

app.directive("whitefooterphotos", function(){
  return {
    restrict: 'E',
    template: require('directives/whitefooterphotos.html')
  }
});

app.directive("whitefooterblank", function(){
  return {
    restrict: 'E',
    template: require('directives/whitefooterblank.html')
  }
});


app.directive("whitetest", function(){
  return {
    restrict: 'E',
    template: require('directives/whitetest.html')
  }
});


app.directive("designtools", function(){
  return {
    restrict: 'E',
    template: require('directives/designtools.html')
  }
});

app.directive("teamjobs", function(){
  return {
    restrict: 'E',
    template: require('directives/teamjobs.html')
  }
});

app.directive("teamrecents", function(){
  return {
    restrict: 'E',
    template: require('directives/teamrecents.html')
  }
});

app.directive("teamapps", function(){
  return {
    restrict: 'E',
    template: require('directives/teamapps.html')
  }
});

app.directive("teamwhy", function(){
  return {
    restrict: 'E',
    template: require('directives/teamwhy.html')
  }
});

app.directive("teamproducts", function(){
  return {
    restrict: 'E',
    template: require('directives/teamproducts.html')
  }
});

app.directive("teambrands", function(){
  return {
    restrict: 'E',
    template: require('directives/teambrands.html')
  }
});

app.directive("teamtimeline", function(){
  return {
    restrict: 'E',
    template: require('directives/teamtimeline.html')
  }
});

app.directive("teamtools", function(){
  return {
    restrict: 'E',
    template: require('directives/teamtools.html')
  }
});

app.directive("teamtestimonalleft", function(){
  return {
    restrict: 'E',
    template: require('directives/teamtestimonalleft.html')
  }
});

app.directive("teamtestimonalright", function(){
  return {
    restrict: 'E',
    template: require('directives/teamtestimonalright.html')
  }
});

app.directive("borderedfooter", function(){
  return {
    restrict: 'E',
    template: require('directives/borderedfooter.html')
  }
});

app.directive("noborderedfooter", function(){
  return {
    restrict: 'E',
    template: require('directives/noborderedfooter.html')
  }
});

app.directive("postproductapproach", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductapproach.html')
  }
});

app.directive("postproductquotelarge", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductquotelarge.html')
  }
});


app.directive("postproductslider", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductslider.html')
  }
});

app.directive("postproducttools", function(){
  return {
    restrict: 'E',
    template: require('directives/postproducttools.html')
  }
});

app.directive("postproductapps", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductapps.html')
  }
});

app.directive("postproductchallenge", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductchallenge.html')
  }
});

app.directive("postproductabout", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductabout.html')
  }
});


app.directive("postproductsteps", function(){
  return {
    restrict: 'E',
    template: require('directives/postproductsteps.html')
  }
});

app.directive("postrelated", function(){
  return {
    restrict: 'E',
    template: require('directives/postrelated.html')
  }
});

app.directive("postfeatureslider", function(){
  return {
    restrict: 'E',
    template: require('directives/postfeatureslider.html')
  }
});

app.directive("postvideo", function(){
  return {
    restrict: 'E',
    template: require('directives/postvideo.html')
  }
});


app.directive("aboutbrandtop", function(){
  return {
    restrict: 'E',
    template: require('directives/aboutbrandtop.html')
  }
});

app.directive("aboutbrandabout", function(){
  return {
    restrict: 'E',
    template: require('directives/aboutbrandabout.html')
  }
});

app.directive("abouttimeline", function(){
  return {
    restrict: 'E',
    template: require('directives/abouttimeline.html')
  }
});

app.directive("svgfloor", function(){
  return {
    restrict: 'E',
    template: require('directives/svgfloor.html')
  }
});

app.directive("popupsvgfloor", function(){
  return {
    restrict: 'E',
    template: require('directives/popupsvgfloor.html')
  }
});

app.directive("filtermenu", function(){
  return {
    restrict: 'E',
    template: require('directives/filtermenu.html')
  }
});

app.directive("popanimation", function(){
  return {
    restrict: 'E',
    template: require('directives/popanimation.html')
  }
});

app.directive("popcontent", function(){
  return {
    restrict: 'E',
    template: require('directives/popcontent.html')
  }
});

app.directive("pophelp", function(){
  return {
    restrict: 'E',
    template: require('directives/pophelp.html')
  }
});

app.directive("popsearch", function(){
  return {
    restrict: 'E',
    template: require('directives/popsearch.html')
  }
});

app.directive("popin", function(){
  return {
    restrict: 'E',
    template: require('directives/popin.html')
  }
});

app.directive("popup", function(){
  return {
    restrict: 'E',
    template: require('directives/popup.html')
  }
});

app.directive("videopopup", function(){
  return {
    restrict: 'E',
    template: require('directives/videopopup.html')
  }
});

app.directive("getstarted", function(){
  return {
    restrict: 'E',
    template: require('directives/getstarted.html')
  }
});

app.directive("learnmore", function(){
  return {
    restrict: 'E',
    template: require('directives/learnmore.html')
  }
});

app.directive("pageclose", function(){
  return {
    restrict: 'E',
    template: require('directives/pageclose.html')
  }
});

app.directive("postclose", function(){
  return {
    restrict: 'E',
    template: require('directives/postclose.html')
  }
});

app.directive("markyellow", function(){
  return {
    restrict: 'E',
    template: require('svg/markyellow.html')
  }
});

app.directive("markwhite", function(){
  return {
    restrict: 'E',
    template: require('svg/markwhite.html')
  }
});

app.directive("markdark", function(){
  return {
    restrict: 'E',
    template: require('svg/markdark.html')
  }
});

app.directive("markone", function(){
  return {
    restrict: 'E',
    template: require('svg/markone.html')
  }
});

app.directive("brandwhitefull", function(){
  return {
    restrict: 'E',
    template: require('svg/brandwhitefull.html')
  }
});

app.directive("brandwhitestack", function(){
  return {
    restrict: 'E',
    template: require('svg/brandwhitestack.html')
  }
});

app.directive("brandonestack", function(){
  return {
    restrict: 'E',
    template: require('svg/brandonestack.html')
  }
});

app.directive("brandninefull", function(){
  return {
    restrict: 'E',
    template: require('svg/brandninefull.html')
  }
});

app.directive("brandninestack", function(){
  return {
    restrict: 'E',
    template: require('svg/brandninestack.html')
  }
});

app.directive("brandninestackanimation", function(){
  return {
    restrict: 'E',
    template: require('svg/brandninestackanimation.html')
  }
});

app.directive("brandninelong", function(){
  return {
    restrict: 'E',
    template: require('svg/brandninelong.html')
  }
});

app.directive("brandsixstack", function(){
  return {
    restrict: 'E',
    template: require('svg/brandsixstack.html')
  }
});

app.directive("brandeightstack", function(){
  return {
    restrict: 'E',
    template: require('svg/brandeightstack.html')
  }
});

app.directive("brandsixfull", function(){
  return {
    restrict: 'E',
    template: require('svg/brandsixfull.html')
  }
});

app.directive("mansittingfour", function(){
  return {
    restrict: 'E',
    template: require('svg/mansittingfour.html')
  }
});

app.directive("mansittingfive", function(){
  return {
    restrict: 'E',
    template: require('svg/mansittingfive.html')
  }
});

app.directive("manstand", function(){
  return {
    restrict: 'E',
    template: require('svg/manstand.html')
  }
});

app.directive("womanstand", function(){
  return {
    restrict: 'E',
    template: require('svg/womanstand.html')
  }
});

app.directive("door", function(){
  return {
    restrict: 'E',
    template: require('svg/door.html')
  }
});

app.directive("window", function(){
  return {
    restrict: 'E',
    template: require('svg/window.html')
  }
});

app.directive("playbutton", function(){
  return {
    restrict: 'E',
    template: require('svg/playbutton.html')
  }
});

app.directive("thinkingman", function(){
  return {
    restrict: 'E',
    template: require('svg/thinkingman.html')
  }
});

app.directive("thinkingman1", function(){
  return {
    restrict: 'E',
    template: require('svg/thinkingman1.html')
  }
});

app.directive("deskonemid", function(){
  return {
    restrict: 'E',
    template: require('svg/deskonemid.html')
  }
});

app.directive("deskoneflat", function(){
  return {
    restrict: 'E',
    template: require('svg/deskoneflat.html')
  }
});

app.directive("deskoneback", function(){
  return {
    restrict: 'E',
    template: require('svg/deskoneback.html')
  }
});

app.directive("deskoneone", function(){
  return {
    restrict: 'E',
    template: require('svg/deskoneone.html')
  }
});

app.directive("desktwo", function(){
  return {
    restrict: 'E',
    template: require('svg/desktwo.html')
  }
});

app.directive("deskthree", function(){
  return {
    restrict: 'E',
    template: require('svg/deskthree.html')
  }
});

app.directive("deskfive", function(){
  return {
    restrict: 'E',
    template: require('svg/deskfive.html')
  }
});

app.directive("imacone", function(){
  return {
    restrict: 'E',
    template: require('svg/imacone.html')
  }
});

app.directive("imaclinedone", function(){
  return {
    restrict: 'E',
    template: require('svg/imaclinedone.html')
  }
});

app.directive("imaclinedthree", function(){
  return {
    restrict: 'E',
    template: require('svg/imaclinedthree.html')
  }
});

app.directive("imaclinedfive", function(){
  return {
    restrict: 'E',
    template: require('svg/imaclinedfive.html')
  }
});

app.directive("cartoonlights", function(){
  return {
    restrict: 'E',
    template: require('svg/cartoonlights.html')
  }
});

app.directive("cartoonlightson", function(){
  return {
    restrict: 'E',
    template: require('svg/cartoonlightson.html')
  }
});

app.directive("light1darkoff", function(){
  return {
    restrict: 'E',
    template: require('svg/light1darkoff.html')
  }
});

app.directive("light1darkon", function(){
  return {
    restrict: 'E',
    template: require('svg/light1darkon.html')
  }
});

app.directive("light2darkoff", function(){
  return {
    restrict: 'E',
    template: require('svg/light2darkoff.html')
  }
});

app.directive("light2darkon", function(){
  return {
    restrict: 'E',
    template: require('svg/light2darkon.html')
  }
});

app.directive("light2lightoff", function(){
  return {
    restrict: 'E',
    template: require('svg/light2lightoff.html')
  }
});

app.directive("light2lighton", function(){
  return {
    restrict: 'E',
    template: require('svg/light2lighton.html')
  }
});

app.directive("light3darkoff", function(){
  return {
    restrict: 'E',
    template: require('svg/light3darkoff.html')
  }
});

app.directive("light3darkon", function(){
  return {
    restrict: 'E',
    template: require('svg/light3darkon.html')
  }
});

app.directive("light4darkoff", function(){
  return {
    restrict: 'E',
    template: require('svg/light4darkoff.html')
  }
});

app.directive("light4darkon", function(){
  return {
    restrict: 'E',
    template: require('svg/light4darkon.html')
  }
});

app.directive("letterc1", function(){
  return {
    restrict: 'E',
    template: require('svg/letterc1.html')
  }
});

app.directive("letterc2", function(){
  return {
    restrict: 'E',
    template: require('svg/letterc2.html')
  }
});

app.directive("letterc3", function(){
  return {
    restrict: 'E',
    template: require('svg/letterc3.html')
  }
});

app.directive("letterc4", function(){
  return {
    restrict: 'E',
    template: require('svg/letterc4.html')
  }
});

app.directive("lettercdrip1", function(){
  return {
    restrict: 'E',
    template: require('svg/lettercdrip1.html')
  }
});

app.directive("lettercdrip2", function(){
  return {
    restrict: 'E',
    template: require('svg/lettercdrip2.html')
  }
});

app.directive("lettercdrip3", function(){
  return {
    restrict: 'E',
    template: require('svg/lettercdrip3.html')
  }
});

app.directive("lettercdrip4", function(){
  return {
    restrict: 'E',
    template: require('svg/lettercdrip4.html')
  }
});

app.directive("lettercdrip5", function(){
  return {
    restrict: 'E',
    template: require('svg/lettercdrip5.html')
  }
});

app.directive("desk", function(){
  return {
    restrict: 'E',
    template: require('svg/desk.html')
  }
});

app.directive("deskdark", function(){
  return {
    restrict: 'E',
    template: require('svg/deskdark.html')
  }
});

app.directive("deskdarkmac", function(){
  return {
    restrict: 'E',
    template: require('svg/deskdarkmac.html')
  }
});

app.directive("desklightmac", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightmac.html')
  }
});

app.directive("desklightimac", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightimac.html')
  }
});

app.directive("desklightimacbook", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightimacbook.html')
  }
});

app.directive("desklightpencil1", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightpencil1.html')
  }
});

app.directive("desklightpencil2", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightpencil2.html')
  }
});

app.directive("desklightpencil3", function(){
  return {
    restrict: 'E',
    template: require('svg/desklightpencil3.html')
  }
});

app.directive("desklight", function(){
  return {
    restrict: 'E',
    template: require('svg/desklight.html')
  }
});

app.directive("light", function(){
  return {
    restrict: 'E',
    template: require('svg/light.html')
  }
});

app.directive("ladyface", function(){
  return {
    restrict: 'E',
    template: require('svg/ladyface.html')
  }
});

app.directive("ladyface4", function(){
  return {
    restrict: 'E',
    template: require('svg/ladyface4.html')
  }
});

app.directive("ladyface6", function(){
  return {
    restrict: 'E',
    template: require('svg/ladyface6.html')
  }
});

app.directive("manface", function(){
  return {
    restrict: 'E',
    template: require('svg/manface.html')
  }
});

app.directive("manface4", function(){
  return {
    restrict: 'E',
    template: require('svg/manface4.html')
  }
});

app.directive("couple", function(){
  return {
    restrict: 'E',
    template: require('svg/couple.html')
  }
});

app.directive("manatdesk", function(){
  return {
    restrict: 'E',
    template: require('svg/manatdesk.html')
  }
});

app.directive("manatdeskman", function(){
  return {
    restrict: 'E',
    template: require('svg/manatdeskman.html')
  }
});

app.directive("manatdesk2", function(){
  return {
    restrict: 'E',
    template: require('svg/manatdesk2.html')
  }
});

//UI Router ES6
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	// ES5 .config(function($provide, authProvider)

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('animation', {
		url: '/',
		controller: menuController,
		template: require('animation/animation.html')
	})

	$locationProvider.html5Mode(true);

});

export default app;