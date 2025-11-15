require 'openssl'

# macOS の場合は Homebrew の openssl を使わず、
# システムのデフォルト証明書をそのまま使う
if RUBY_PLATFORM.include?("darwin")
  # macOS のシステム証明書チェーン
  ca_file = "/etc/ssl/cert.pem"

  ENV['SSL_CERT_FILE'] ||= ca_file
  OpenSSL::SSL::SSLContext::DEFAULT_PARAMS[:ca_file] = ca_file
end

# 必ず PEER を検証する
OpenSSL::SSL::SSLContext::DEFAULT_PARAMS[:verify_mode] = OpenSSL::SSL::VERIFY_PEER
