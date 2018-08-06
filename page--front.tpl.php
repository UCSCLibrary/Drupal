<?php if ($page['alert']): ?>    
	<?php print render($page['alert']); ?>
<?php endif; ?>
<!-- Header -->	
<div class="header">
	<div class="header-main">
		<div class="site-logo">
			<h1>
				<a href="https://www.ucsc.edu">
					<img src="https://library.ucsc.edu/sites/default/files/external/images/header-ucsc-logo-white.png" alt="UC Santa Cruz" />
				</a>
				<span class="site-title-mobile">University Library</span>
			</h1>
		</div>
		<div class="header-main-menu">
			<?php if ($page['header_main_menu']): ?>    
				<?php print render($page['header_main_menu']); ?>
			<?php endif; ?>
		</div>
	</div>
	<div class="header-secondary clearfix">
		<h2><a href="/">University<br>Library</a></h2>
		<div class="header-secondary-menu">
			<?php if ($page['header_secondary_menu']): ?>    
				<?php print render($page['header_secondary_menu']); ?>
			<?php endif; ?>
		</div>
	</div>
</div>

<!-- Page -->
<div id="main-content" class="page center-block">

				<?php if($page["sidebar"]): ?>
				<!-- Sidebar Icon for Mobile --> 
					<div class="navbar navbar-default" role="navigation">
						<div class="container">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
						</div>
					</div>
					<div class="content container-fluid">
						<div class="row row-offcanvas row-offcanvas-left">

				



				<?php else : ?>
					<div class="content container-fluid">
						<div class="row row-offcanvas row-offcanvas-left">
							<div class="node col-12">
				<?php endif; ?>
								

				<!-- Content --> 
							<div class="node col-xs-12 col-sm-9">
							<h1 class="page-title"><?php print $title; ?></h1>


				<?php if($page["above_content"]): ?>
					<div class="above_content">
						<?php print render($page["above_content"]); ?>
					</div>
				<?php endif; ?>
				<?php if ($show_messages && $messages): print render($messages); endif; ?>
				<?php if($page["help"]): print '<div class="help">' . render($page["help"]) . '</div>'; endif; ?>
				<?php print render($tabs); ?>
				<?php print render($action_links); ?>
				
				
			</div><!-- /.content -->
				<!-- Sidebar -->
							<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
								<?php print render($page["sidebar"]); ?>
							</div>
		</div><!--/.row-->
		<?php print render($page["content"]); ?>
	</div><!--/.node-->
</div><!--/.page-->
				
<!-- Below Content -->
<?php if($page["below_content"]): ?>
	<div class="below-content">
		<?php print render($page["below_content"]); ?>
	</div>
<?php endif; ?>

<!-- Footer -->
<div class="footer2">
	<?php if ($page['footer']): ?>    
		<?php print render($page['footer']); ?>
	<?php endif; ?>
</div>