# GitHub Pages デプロイガイド

このプロジェクトを GitHub Pages で公開するための設定ガイドです。

## 前提条件

- GitHub アカウント
- このリポジトリへのアクセス権限
- ローカルに git がインストール済み

## デプロイ方法

### 方法 1: GitHub Actions を使用（推奨）

GitHub Actions を使用すると、自動的にビルドとデプロイが行われます。

#### セットアップ手順

1. **リポジトリ設定を確認**
   - GitHub でリポジトリを開く
   - Settings → Pages を開く
   - Build and deployment セクションで以下を確認：
     - Source: `GitHub Actions` を選択
     - Branch: `main` を選択

2. **コードをプッシュ**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **デプロイ確認**
   - GitHub リポジトリの Actions タブで、デプロイの進行状況を確認
   - デプロイ完了後、`https://mkdworkkou-hue.github.io/` でサイトが公開されます

### 方法 2: ローカルでビルドしてプッシュ

ローカルでビルドしてから GitHub にプッシュする方法です。

```bash
# 1. プロジェクトをビルド
pnpm build

# 2. ビルド結果をコピー
cp -r dist/public/* .

# 3. Git に追加してコミット
git add .
git commit -m "Deploy to GitHub Pages"

# 4. プッシュ
git push origin main
```

または、デプロイスクリプトを使用：

```bash
./deploy.sh
```

## トラブルシューティング

### サイトが表示されない

1. **リポジトリ設定を確認**
   - Settings → Pages で、Source が正しく設定されているか確認
   - Branch が `main` に設定されているか確認

2. **キャッシュをクリア**
   - ブラウザのキャッシュをクリア（Ctrl+Shift+Delete）
   - 5～10 分待ってから再度アクセス

3. **Actions ログを確認**
   - GitHub リポジトリの Actions タブで、デプロイログを確認
   - エラーメッセージがないか確認

### ビルドエラーが発生

```bash
# 依存関係を再インストール
pnpm install

# キャッシュをクリア
pnpm store prune

# 再度ビルド
pnpm build
```

## ファイル構成

- `.github/workflows/deploy.yml` - GitHub Actions ワークフロー設定
- `deploy.sh` - ローカルデプロイスクリプト
- `vite.config.ts` - Vite 設定（base: '/' に設定済み）

## カスタムドメイン設定（オプション）

カスタムドメインを使用したい場合：

1. GitHub リポジトリの Settings → Pages を開く
2. Custom domain に独自ドメインを入力
3. DNS 設定を完了

詳細は [GitHub Pages ドキュメント](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) を参照してください。

## 参考資料

- [GitHub Pages ドキュメント](https://docs.github.com/en/pages)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
