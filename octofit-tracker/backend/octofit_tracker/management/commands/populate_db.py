from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        User.objects.all().delete()
        # Dummy Teams/Activities/Leaderboard/Workouts
        # Annahme: Modelle existieren, ggf. anpassen
        from octofit_tracker.models import Team, Activity, Leaderboard, Workout
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        tony = User.objects.create(username='ironman', email='ironman@marvel.com', password='pass', team=marvel)
        steve = User.objects.create(username='captain', email='captain@marvel.com', password='pass', team=marvel)
        bruce = User.objects.create(username='hulk', email='hulk@marvel.com', password='pass', team=marvel)
        clark = User.objects.create(username='superman', email='superman@dc.com', password='pass', team=dc)
        bruce_dc = User.objects.create(username='batman', email='batman@dc.com', password='pass', team=dc)

        Activity.objects.create(user=tony, type='Run', duration=30, calories=300)
        Activity.objects.create(user=steve, type='Swim', duration=45, calories=400)
        Activity.objects.create(user=bruce, type='Bike', duration=60, calories=500)
        Activity.objects.create(user=clark, type='Fly', duration=120, calories=1000)
        Activity.objects.create(user=bruce_dc, type='Martial Arts', duration=90, calories=700)

        Workout.objects.create(name='Morning Cardio', description='30 min jog + 15 min HIIT')
        Workout.objects.create(name='Strength', description='Weight lifting and core')

        Leaderboard.objects.create(user=tony, points=1000)
        Leaderboard.objects.create(user=steve, points=900)
        Leaderboard.objects.create(user=clark, points=1100)
        Leaderboard.objects.create(user=bruce_dc, points=950)

        self.stdout.write(self.style.SUCCESS('octofit_db erfolgreich mit Testdaten befüllt.'))
