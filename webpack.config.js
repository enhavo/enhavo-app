const EnhavoEncore = require('@enhavo/core/EnhavoEncore');
const AppPackage = require('@enhavo/app/Encore/EncoreRegistryPackage');
const FormPackage = require('@enhavo/form/Encore/EncoreRegistryPackage');
const MediaPackage = require('@enhavo/media/Encore/EncoreRegistryPackage');
const DashboardPackage = require('@enhavo/dashboard/Encore/EncoreRegistryPackage');
const UserPackage = require('@enhavo/user/Encore/EncoreRegistryPackage');

EnhavoEncore
  // register packages
  .register(new AppPackage())
  .register(new FormPackage())
  .register(new MediaPackage())
  .register(new DashboardPackage())
  .register(new UserPackage())
;

EnhavoEncore.add('enhavo', (Encore) => {
  // custom encore config
  // Encore.enableBuildNotifications();
});

EnhavoEncore.add('theme', (Encore) => {
  Encore
    // add theme entry and config
    .addEntry('base', './assets/theme/base')
});

module.exports = EnhavoEncore.export();