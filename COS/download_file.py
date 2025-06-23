import ibm_boto3
from ibm_botocore.client import Config
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv(dotenv_path=".env")

# Datos de acceso desde .env
api_key = os.getenv("API_KEY")
access_key = os.getenv("ACCESS_KEY")
secret_key = os.getenv("SECRET_KEY")
resource_instance_id = os.getenv("RESOURCE_INSTANCE_ID")
endpoint_url = os.getenv("ENDPOINT_URL")

# Inicializar cliente
cos = ibm_boto3.client("s3",
    ibm_api_key_id=api_key,
    ibm_service_instance_id=resource_instance_id,
    ibm_auth_endpoint="https://iam.cloud.ibm.com/identity/token",
    config=Config(signature_version="oauth"),
    endpoint_url=endpoint_url
)

# Descargar el archivo
bucket_name = "somebucket-for-interview"
file_name = "README.md"
download_path = "./COS/README.md"

try:
    cos.download_file(Bucket=bucket_name, Key=file_name, Filename=download_path)
    print("Archivo descargado correctamente:", download_path)
except Exception as e:
    print("Error al descargar el archivo:", e)