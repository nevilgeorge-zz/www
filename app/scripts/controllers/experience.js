'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('ExperienceCtrl', function ($scope) {
    $scope.experiences = [
      {
        company: 'uber technologies, inc',
        position: 'software engineering intern',
        duration: 'jun \'15 - sept \'15',
        description: 'Worked on Supply Engineering to increase the number of driver signups through referrals. ' +
          'Built a client-side tool from scratch using React that allows users to control and customize driver referral campaigns. ' +
          'Currently used by all city operations teams worldwide. ' +
          'Wrote Python for the referrals backend service, and maintained 100% test coverage for the entire application.'
      },
      {
        company: 'eecs dept, northwestern university',
        position: 'undergraduate teaching assistant',
        duration: 'sept \'14 - present',
        description: 'Courses: Intro. to Computer Systems, Data Structures & Data Management, Intro. to Database Systems. ' +
          'Instructed discussion sections for over 40 students, held office hours, graded assignments/exams.'
      },
      {
        company: 'shmoop university, inc',
        position: 'software engineering intern',
        duration: 'june \'14 - aug \'14',
        description: 'Wrote unit tests for client-side JavaScript in Chai, Mocha and KarmaJS. ' +
          'Developed a tool to abstract site ads in JavaScript and PHP. ' +
          'Refactored over 10,000 lines of PHP to follow the factory design pattern.'
      },
      {
        company: 'shmoop university, inc',
        position: 'software consultant',
        duration: 'sept \'13 - june \'14',
        description: 'Designed and developed online drills for Shmoop\'s online math courses in JavaScript and HTML5 Canvas.'
      }
    ];
  });
