var derbyStarter = require('derby-starter');

var options = {
  auth: {
    passport: {
      registerCallback: function(req, res, user, done) {
        var model = req.getModel();
        var $user = model.at('auths.' + user.id);
        model.fetch($user, function() {
          $user.set('email', $user.get('local.email'), done);
        })
      }
    },
    strategies: {
      facebook: {
        strategy: require('passport-facebook').Strategy,
        conf: {
          clientID: '58362219983',
          clientSecret: 'da0fb6cbcb6cac1a0aca9f78200935d2',
          callbackURL: 'http://localhost:3000/auth/facebook/callback'
        }
      },
      github: {
        strategy: require('passport-github').Strategy,
        conf: {
          clientID: 'eeb00e8fa12f5119e5e9',
          clientSecret: '61631bdef37fce808334c83f1336320846647115'
        }
      },
      vkontakte: {
        strategy: require('passport-vkontakte').Strategy,
        conf: {
          clientID: '4373291',
          clientSecret: 'fOZiLyGhSH1DHWLFFfZo',
          callbackURL: 'http://localhost:3000/auth/vkontakte/callback'
        }
      }
    },
    user: {
      id: true,
      email: true,
      facebook: true,
      github: true,
      vkontakte: true
    }
  }
}

derbyStarter.run(__dirname + '/auth', options);