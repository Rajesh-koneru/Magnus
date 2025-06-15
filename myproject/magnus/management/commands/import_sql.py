import os
from django.core.management.base import BaseCommand
import mysql.connector
from django.conf import settings


class Command(BaseCommand):
    help = 'Import SQL dump into Railway MySQL database'

    def handle(self, *args, **kwargs):
        sql_path = os.path.join(settings.BASE_DIR, 'sql','dump', 'magnus_application_json1.sql')  # Adjust if placed elsewhere

        config = {
            'host': 'yamanote.proxy.rlwy.net',
            'port': 31145,
            'user': 'root',
            'password': 'ZuKHpINqyWjNuXtAUTeXgAJGdQfaFmme',
            'database': 'railway',
        }

        try:
            connection = mysql.connector.connect(**config)
            cursor = connection.cursor()

            with open(sql_path, 'r', encoding='utf-8') as f:
                sql_statements = f.read()

            for statement in sql_statements.split(';'):
                if statement.strip():
                    try:
                        cursor.execute(statement)
                    except mysql.connector.Error as err:
                        self.stderr.write(f"Error: {err}")

            connection.commit()
            self.stdout.write(self.style.SUCCESS('✅ SQL import successful'))

        except mysql.connector.Error as err:
            self.stderr.write(f"Connection Error: {err}")
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'connection' in locals() and connection.is_connected():
                connection.close()
